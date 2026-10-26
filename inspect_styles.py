import zipfile
import xml.etree.ElementTree as ET

def inspect_styles(pptx_path):
    print("=" * 60)
    print("FILE:", pptx_path)
    with zipfile.ZipFile(pptx_path, 'r') as z:
        for idx in range(1, 6):
            slide_file = f'ppt/slides/slide{idx}.xml'
            if slide_file not in z.namelist():
                continue
            print(f"\n--- Slide {idx} ---")
            tree = ET.fromstring(z.read(slide_file))
            
            # Check bg
            bg = tree.find('{http://schemas.openxmlformats.org/presentationml/2006/main}bg')
            if bg is not None:
                for clr in bg.iter():
                    if clr.tag.endswith('srgbClr'):
                        print("  Slide Background srgbClr:", clr.attrib)
                    elif clr.tag.endswith('schemeClr'):
                        print("  Slide Background schemeClr:", clr.attrib)
            
            # Check shapes
            for sp in tree.iter('{http://schemas.openxmlformats.org/presentationml/2006/main}sp'):
                cNvPr = sp.find('.//{http://schemas.openxmlformats.org/presentationml/2006/main}cNvPr')
                name = cNvPr.attrib.get('name', '') if cNvPr is not None else ''
                
                # Check shape fill
                spPr = sp.find('{http://schemas.openxmlformats.org/presentationml/2006/main}spPr')
                fill_info = []
                if spPr is not None:
                    for clr in spPr.iter():
                        if clr.tag.endswith('srgbClr'):
                            fill_info.append(('srgb', clr.attrib.get('val')))
                        elif clr.tag.endswith('schemeClr'):
                            fill_info.append(('scheme', clr.attrib.get('val')))
                
                # Check text paragraphs
                txBody = sp.find('{http://schemas.openxmlformats.org/presentationml/2006/main}txBody')
                if txBody is not None:
                    for p in txBody.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}p'):
                        p_texts = []
                        p_fonts = []
                        p_colors = []
                        p_sizes = []
                        for r in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}r'):
                            t = r.find('{http://schemas.openxmlformats.org/drawingml/2006/main}t')
                            if t is not None and t.text:
                                p_texts.append(t.text)
                                rPr = r.find('{http://schemas.openxmlformats.org/drawingml/2006/main}rPr')
                                if rPr is not None:
                                    latin = rPr.find('{http://schemas.openxmlformats.org/drawingml/2006/main}latin')
                                    if latin is not None:
                                        p_fonts.append(latin.attrib.get('typeface'))
                                    sz = rPr.attrib.get('sz')
                                    if sz:
                                        p_sizes.append(sz)
                                    for clr in rPr.iter():
                                        if clr.tag.endswith('srgbClr'):
                                            p_colors.append(clr.attrib.get('val'))
                        if p_texts:
                            txt = ''.join(p_texts).strip()
                            if txt:
                                print(f"  [{name}] {txt}")
                                print(f"       Fonts: {p_fonts} | Sizes: {p_sizes} | Colors: {p_colors} | ShapeFills: {fill_info}")

with open('scratch_styles.txt', 'w', encoding='utf-8') as out:
    import sys
    sys.stdout = out
    inspect_styles('Carte de remerciement.pptx')
    inspect_styles('Tickets_Coeur_en_Rose_PowerPoint (1).pptx')

print("Styles inspection finished!")
