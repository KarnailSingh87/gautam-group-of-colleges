# Higher Education & Technical University Website Showcase
### Inspired by 21st.dev, Dribbble Bento UI & Himachal Pradesh Technical University (himtu.ac.in)

A client-ready, high-converting homepage built specifically for technical universities, state higher education boards, and colleges. It bridges the gap between **comprehensive institutional governance** (like HIMTU's real-world student portals, OTR, examination results, and affiliated colleges directory) and **ultra-modern UI/UX design** (21st.dev interactive bento grids, glassmorphism, and Dribbble aesthetics).

---

## 🚀 Live Preview Server
The preview server is running:
- **Local URL**: [http://localhost:5173/](http://localhost:5173/)
- **Network URL**: Accessible across your local Wi-Fi for mobile/tablet presentation.

To run at any time:
```bash
npm run dev
# or
npm run build && npm run preview
```

---

## 🏛️ How himtu.ac.in Was Referenced & Modernized

We analyzed **Himachal Pradesh Technical University's official portal ([himtu.ac.in](https://www.himtu.ac.in))** and translated its essential institutional features into an Apple / 21st.dev caliber interface:

| HIMTU Feature (himtu.ac.in) | Traditional Problem on Old Portal | Our Modernized Prototype Solution |
| :--- | :--- | :--- |
| **One-Time Registration (OTR)** | Clunky forms, confusing sign-in paths | **Unified OTR Student Portal Card** with 1-click modal for new student PURN generation and existing candidate login. |
| **Examination & Results Portal** | Slow PDF searches or complex captcha gates | **Interactive Instant Marks Card Lookup**: Enter Roll Number (e.g. `2024-HPTU-1082`) to preview grades, SGPA calculation, print marks card, or file scrutiny. |
| **Press Notes & Circulars** | Hard-to-read table buried in submenus | **Real-Time Notice Feed with Flashing 'NEW' Badges**, categorized into Date Sheets, Vacant Seat Counseling, Results, and Tenders with instant PDF downloads. |
| **HPCET Counseling & Allotment** | Fragmented link redirects | **HPCET Centralized Counseling Engine**: Choice filling schedules, seat matrix, and Round 1/2 allotment letters. |
| **Question Papers (PYQ) & Syllabi** | Missing or hard-to-navigate archives | **Searchable Question Bank Archive**: Instant filter by branch (CSE, Civil, Pharmacy) and semester under the **NEP 2020 & CBCS schemes**. |
| **Affiliated Colleges Directory** | Static text lists without filtering | **Interactive Directory**: Displays 42+ constituent & affiliated colleges (JNGEC Sundernagar, RGGEC Kangra, ABVGIET, etc.) with location, branch tags, and ratings. |
| **State E-Governance & Helplines** | Often overlooked | Direct header and footer integration for **Mukhyamantri Seva Sankalp 1100**, **RTI**, and **Anti-Ragging 24x7 Cell**. |

---

## 🎨 4 Instant University Presets (Client Showcase)
Switch between these live at the top of the screen:
1. **HPTU (himtu.ac.in)** *(Default)*: State Technical University, NEP 2020, HPCET, and Engineering/Pharmacy colleges.
2. **St. Aurelius University**: Global Ivy League, heritage architecture, liberal arts & medical research.
3. **Vanguard Institute of Technology**: Modern STEM, quantum computing & Silicon Valley accelerator.
4. **Oakhaven University**: Arts, human-centered UI/UX design, and creative media.

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (custom animations, glassmorphism, responsive grid layouts)
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Playfair Display*)
