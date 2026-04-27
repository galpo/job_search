from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib import colors

def create_apple_resume():
    # Create PDF
    pdf_file = "/mnt/user-data/outputs/Ritee_Rouf_Apple_PM_Resume.pdf"
    doc = SimpleDocTemplate(pdf_file, pagesize=letter,
                           topMargin=0.45*inch, bottomMargin=0.45*inch,
                           leftMargin=0.65*inch, rightMargin=0.65*inch)
    
    # Container for content
    story = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles - tighter spacing
    name_style = ParagraphStyle(
        'CustomName',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#1d1d1f'),
        spaceAfter=2,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#424245'),
        alignment=TA_CENTER,
        spaceAfter=2
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontSize=8.5,
        textColor=colors.HexColor('#6e6e73'),
        alignment=TA_CENTER,
        spaceAfter=8
    )
    
    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=10.5,
        textColor=colors.HexColor('#1d1d1f'),
        spaceAfter=3,
        spaceBefore=5,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=9.5,
        textColor=colors.HexColor('#1d1d1f'),
        spaceAfter=4,
        leading=11.5
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontSize=9.5,
        textColor=colors.HexColor('#1d1d1f'),
        spaceAfter=2.5,
        leading=11.5,
        leftIndent=12,
        bulletIndent=3
    )
    
    company_style = ParagraphStyle(
        'CompanyStyle',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#1d1d1f'),
        spaceAfter=1,
        spaceBefore=3,
        fontName='Helvetica-Bold'
    )
    
    role_style = ParagraphStyle(
        'RoleStyle',
        parent=styles['Normal'],
        fontSize=9.5,
        textColor=colors.HexColor('#424245'),
        spaceAfter=2.5,
        fontName='Helvetica-Oblique'
    )
    
    # Header
    story.append(Paragraph("Ritee Rouf", name_style))
    story.append(Paragraph("Product Manager | Technical Product Marketing Leader", title_style))
    story.append(Paragraph("riteerouf@gmail.com • (650) 395-7532 • San Mateo, CA • LinkedIn", contact_style))
    
    # Summary - condensed
    story.append(Paragraph("PROFILE", section_header_style))
    summary = """Product leader with 18+ years driving innovation from concept through global launch at Google, VMware, and high-growth 
    startups. Led consumer product achieving 200M+ installs and enterprise solutions generating $45M+ in revenue. Proven ability to 
    influence cross-functional teams (engineering, design, PR, sales) without direct authority, make critical product trade-offs, and 
    serve as product spokesperson to press and analysts. Technical background in AI/ML with hands-on development experience."""
    story.append(Paragraph(summary, body_style))
    
    # Core Competencies - condensed
    story.append(Paragraph("CORE COMPETENCIES", section_header_style))
    competencies = """<b>Product Management:</b> Product Strategy & Roadmap • Cross-Functional Leadership • User Research • Product Launch & GTM<br/>
    <b>Technical Communication:</b> Press & Media Relations • Analyst Briefings • Keynote Presentations • Executive Communication<br/>
    <b>Technical Expertise:</b> AI/ML • Computer Vision • Cloud-Native Applications • SaaS • Consumer Technology • Python"""
    story.append(Paragraph(competencies, body_style))
    
    # Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_header_style))
    
    # Current - 2025
    story.append(Paragraph("AI Product Advisor & Consultant • 2025–Present", company_style))
    story.append(Paragraph("Advising early-stage AI startups on product strategy and GTM; deepening technical fluency through hands-on AI development (Python, Windsurf IDE, AI coding agents)", body_style))
    
    # LatticeFlow - 3 bullets
    story.append(Paragraph("LatticeFlow AI (Computer Vision Startup) • Remote • 2023–2024", company_style))
    story.append(Paragraph("Head of Marketing | Executive Team Member", role_style))
    
    lattice_bullets = [
        "Built marketing function from ground up for early-stage AI startup, defining go-to-market strategy, ICP, and product positioning, achieving 35% pipeline growth and 50% increase in organic search",
        "Led thought-leadership initiative orchestrating AI Safety Standards panel at World Economic Forum (AI House Davos)",
        "Presented quarterly marketing plans to board of directors, aligning cross-functional teams on strategy"
    ]
    
    for bullet in lattice_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Omnicell - 3 bullets
    story.append(Paragraph("Omnicell • Mountain View, CA • 2020–2023", company_style))
    story.append(Paragraph("Enterprise Product Marketing Lead", role_style))
    
    omnicell_bullets = [
        "Led product strategy for $3B automated medication dispensing solution, conducting user research with C-level healthcare executives to define roadmap and positioning",
        "Partnered with engineering and design during COVID-19 to rapidly launch pre-configured medication cabinets, influencing critical product decisions that drove 3x bookings increase to $45M",
        "Repositioned point-of-care solution through deep customer workflow analysis and competitive intelligence, creating differentiated value proposition for hospital pharmacy market"
    ]
    
    for bullet in omnicell_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Storia - 3 bullets
    story.append(Paragraph("Storia (Founder) • Redwood City, CA • 2018–2020", company_style))
    story.append(Paragraph("Founder & Product Lead", role_style))
    
    storia_bullets = [
        "Owned complete product lifecycle from concept to launch for interactive storytelling app targeting K-12 education market",
        "Led cross-functional team of 4 (engineering, design, UX), making critical trade-offs on feature scope, platform decisions, and launch timing",
        "Piloted solution in 3-4 elementary schools, iterating based on user feedback to achieve product-market fit"
    ]
    
    for bullet in storia_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Alation - 3 bullets
    story.append(Paragraph("Alation • Redwood City, CA • 2017–2018", company_style))
    story.append(Paragraph("Director of Product Marketing", role_style))
    
    alation_bullets = [
        "Collaborated with product and engineering to influence roadmap for enterprise data catalog, translating complex data governance technology into clear value propositions for technical and business audiences",
        "Developed repeatable sales playbook and persona-driven messaging that reduced sales cycle by 30% and increased SQLs by 7x",
        "Launched $4M partner marketing program driving 35% of revenue pipeline, positioned Alation as category leader"
    ]
    
    for bullet in alation_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # VMware - 3 bullets
    story.append(Paragraph("VMware • Palo Alto, CA • 2015–2017", company_style))
    story.append(Paragraph("Senior Product Marketing Manager", role_style))
    
    vmware_bullets = [
        "Led global launch of vSphere Integrated Containers (VIC), developing VMworld keynote content for 20,000+ attendees, elevating VMware's container technology brand presence",
        "Conducted press interviews and analyst briefings (Gartner, Forrester) to communicate product vision and technical capabilities",
        "Engineered and delivered live product demos accelerating adoption by 400 enterprise customers and partners"
    ]
    
    for bullet in vmware_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Oracle - 2 bullets
    story.append(Paragraph("Oracle • Redwood City, CA • 2012–2015", company_style))
    story.append(Paragraph("Product Marketing & Strategy, HCM Cloud", role_style))
    
    oracle_bullets = [
        "Led re-branding and repositioning of Oracle Learn Cloud (formerly Taleo Learn) as cloud-based LMS, managed 600+ customer relationships",
        "Conducted analyst briefings and customer presentations, partnered with sales generating $27M in revenue"
    ]
    
    for bullet in oracle_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Google - 4 bullets (kept for its consumer product impact)
    story.append(Paragraph("Google • Mountain View, CA • 2004–2008", company_style))
    story.append(Paragraph("Global Product Marketing Lead, Geo Products", role_style))
    
    google_bullets = [
        "Drove product strategy and roadmap for Google Earth from concept through global launch, collaborating with engineering and design to define features balancing technical feasibility, user needs, and business impact—achieving 200M+ installs",
        "Served as primary product spokesperson conducting press briefings, media interviews, and analyst presentations across North America, Europe, and Asia to drive product advocacy",
        "Led critical product trade-offs for Google Earth, MyMaps, Map Maker, and Google Earth API impacting schedule, feature scope, and market differentiation",
        "Partnered with engineering during R&D to incorporate user feedback and competitive intelligence into product roadmap, developed product positioning translating complex geospatial technology into compelling consumer narratives"
    ]
    
    for bullet in google_bullets:
        story.append(Paragraph(f"• {bullet}", bullet_style))
    
    # Education - condensed
    story.append(Paragraph("EDUCATION & CERTIFICATIONS", section_header_style))
    education = """<b>MBA</b>, Auburn University  •  <b>Executive Education:</b> Stanford University (Design Thinking), Wharton (Managerial Mindset)  •  
    <b>AI/ML Certifications:</b> AI for Everyone (DeepLearning.AI), Coding with AI (100 School), Building Apps with AI Agents (DeepLearning.AI)"""
    story.append(Paragraph(education, body_style))
    
    # Build PDF
    doc.build(story)
    print(f"Resume created successfully: {pdf_file}")

if __name__ == "__main__":
    create_apple_resume()
