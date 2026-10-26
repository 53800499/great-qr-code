import os
import qrcode

pages_data = [
    {
        "filename": "solidaire.html",
        "slug": "solidaire",
        "title": "Ticket Solidaire · Cœur en Rose",
        "ticket_name": "1. Ticket Standard « Solidaire »",
        "code": "CER-STD-2026",
        "price": "50 000 FCFA",
        "carte_img": "slides_export/carte/carte_slide_1.png",
        "ticket_img": "slides_export/tickets/ticket_slide_1.png",
        "qr_filename": "qr_solidaire.png",
        "badge_color": "#f43f5e"
    },
    {
        "filename": "espoir.html",
        "slug": "espoir",
        "title": "Ticket Espoir · Cœur en Rose",
        "ticket_name": "2. Ticket VIP « Espoir »",
        "code": "CER-VIP-2026",
        "price": "100 000 FCFA",
        "carte_img": "slides_export/carte/carte_slide_2.png",
        "ticket_img": "slides_export/tickets/ticket_slide_2.png",
        "qr_filename": "qr_espoir.png",
        "badge_color": "#1f3864"
    },
    {
        "filename": "coeur-dor.html",
        "slug": "coeur-dor",
        "title": "Ticket Cœur d'Or · Cœur en Rose",
        "ticket_name": "3. Ticket Prestige « Cœur d'Or »",
        "code": "CER-OR-2026",
        "price": "150 000 FCFA",
        "carte_img": "slides_export/carte/carte_slide_3.png",
        "ticket_img": "slides_export/tickets/ticket_slide_3.png",
        "qr_filename": "qr_coeur_dor.png",
        "badge_color": "#bf9000"
    },
    {
        "filename": "partenaire.html",
        "slug": "partenaire",
        "title": "Table Partenaire · Cœur en Rose",
        "ticket_name": "4. Table Entreprise · Partenaire",
        "code": "CER-TBL-2026",
        "price": "1 600 000 FCFA",
        "carte_img": "slides_export/carte/carte_slide_4.png",
        "ticket_img": "slides_export/tickets/ticket_slide_4.png",
        "qr_filename": "qr_partenaire.png",
        "badge_color": "#c00000"
    },
    {
        "filename": "marraine-parrain.html",
        "slug": "marraine-parrain",
        "title": "Marraine / Parrain d'Espoir · Cœur en Rose",
        "ticket_name": "5. Marraine / Parrain d'Espoir",
        "code": "CER-MP-2026",
        "price": "300 000–500 000 FCFA",
        "carte_img": "slides_export/carte/carte_slide_5.png",
        "ticket_img": "slides_export/tickets/ticket_slide_5.png",
        "qr_filename": "qr_marraine_parrain.png",
        "badge_color": "#12100f"
    }
]

os.makedirs('qr_codes/pages', exist_ok=True)

# Generate 5 dedicated QR Codes pointing directly to each separate HTML file
for p in pages_data:
    qr = qrcode.QRCode(version=None, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=12, border=2)
    # The QR code points directly to this separate page filename
    qr.add_data(p["filename"])
    qr.make(fit=True)
    img = qr.make_image(fill_color="#11141a", back_color="white")
    img.save(os.path.join('qr_codes', 'pages', p["qr_filename"]))

print("5 dedicated QR codes generated in qr_codes/pages/")

# HTML Template for each separate page
def generate_html(p):
    return f"""<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{p['title']}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <style>
    .page-wrapper {{
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }}
    .page-header-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      background: #1a1e27;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 12px 20px;
    }}
    .page-title-box {{
      display: flex;
      align-items: center;
      gap: 12px;
    }}
    .page-badge {{
      background: {p['badge_color']};
      color: #fff;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
    }}
    .page-title {{
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
    }}
    .page-actions {{
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .btn-nav {{
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      padding: 7px 14px;
      border-radius: 8px;
      font-size: 0.82rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }}
    .btn-nav:hover {{
      background: rgba(244, 63, 94, 0.2);
      border-color: #f43f5e;
      color: #fff;
    }}
    .btn-nav.primary {{
      background: #f43f5e;
      border-color: #f43f5e;
      color: #fff;
      font-weight: 600;
    }}
    .slide-section {{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }}
    .slide-section-label {{
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94a3b8;
      font-weight: 600;
    }}
    .slide-box {{
      width: 100%;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #000;
    }}
    .slide-box img {{
      width: 100%;
      height: auto;
      display: block;
    }}
    @media print {{
      body {{
        background: #fff !important;
        padding: 0 !important;
      }}
      .page-header-bar {{
        display: none !important;
      }}
      .slide-box {{
        border: none !important;
        box-shadow: none !important;
        page-break-after: always;
      }}
    }}
  </style>
</head>
<body>

  <div class="page-wrapper">

    <!-- Top Action Bar -->
    <header class="page-header-bar">
      <div class="page-title-box">
        <span class="page-badge">{p['price']}</span>
        <h1 class="page-title">{p['ticket_name']}</h1>
      </div>

      <div class="page-actions">
        <a class="btn-nav" href="index.html">
          <span>📋</span> Tous les billets
        </a>
        <a class="btn-nav" href="qr_codes/pages/{p['qr_filename']}" download="{p['qr_filename']}">
          <span>⬇️</span> Télécharger QR ({p['slug']})
        </a>
        <button class="btn-nav primary" onclick="window.print()">
          <span>🖨️</span> Imprimer
        </button>
      </div>
    </header>

    <!-- 1. CARTE DE REMERCIEMENT (Exactement comme dans Carte de remerciement.pptx) -->
    <section class="slide-section">
      <div class="slide-section-label">1. Message de Remerciement (Carte de remerciement)</div>
      <div class="slide-box">
        <img src="{p['carte_img']}" alt="Carte de Remerciement - {p['ticket_name']}">
      </div>
    </section>

    <!-- 2. ÉLÉMENT QUI SUIT LE MESSAGE : LE BILLET (Exactement comme dans Tickets_Coeur_en_Rose_PowerPoint.pptx) -->
    <section class="slide-section">
      <div class="slide-section-label">2. Détails du Billet (Élément qui suit le message)</div>
      <div class="slide-box">
        <img src="{p['ticket_img']}" alt="Détails du Billet - {p['ticket_name']}">
      </div>
    </section>

  </div>

</body>
</html>
"""

for p in pages_data:
    content = generate_html(p)
    with open(p["filename"], "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created page: {p['filename']}")

print("All 5 separate pages successfully created!")
