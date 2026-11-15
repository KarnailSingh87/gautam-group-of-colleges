# Gautam Group of Colleges, Hamirpur (H.P.)
### Official Modern Web Portal & Admissions Showcase (Est. 1999 • Silver Jubilee)

A client-ready, high-converting digital campus portal built specifically for **Gautam Group of Colleges, Hamirpur (H.P.)** ([www.ggchmr.com](https://www.ggchmr.com)).

Designed using modern **21st.dev** micro-interactions, **Dribbble Bento UI**, and integrated with real-world state university governance referencing **Himachal Pradesh Technical University (HPTU / himtu.ac.in)**, **Himachal Pradesh University (HPU)**, and **Atal Medical & Research University (AMRU)**.

---

## 🏛️ Real Gautam Group Institutional Credentials

- **Established**: 1999 (25 Years of Educational Preeminence in Himachal Pradesh)
- **Central Location**: Near Bus Stand, Ward No. 10, Hamirpur, Himachal Pradesh – 177001
- **Helpline Numbers**: `+91-9418010420` | `01972-221493`
- **Email**: `ggchmr@gmail.com`
- **Official Website**: `www.ggchmr.com`

### Constituent Colleges Covered:
1. **Gautam College of Pharmacy**: Approved by PCI, New Delhi & Affiliated to HPTU (*B.Pharm, D.Pharm*).
2. **Gautam College of Nursing**: Approved by INC & HPNRC, Affiliated to AMRU (*B.Sc Nursing, Post Basic B.Sc, GNM*).
3. **Gautam Institute of Management & Technology (GIMT)**: Approved by AICTE, Affiliated to HPTU/HPU (*MBA, BBA, BCA, PGDCA*).
4. **Gautam Post-Graduate Degree College**: Affiliated to HPU, Shimla (*M.Sc Chemistry, Physics, Botany, Zoology, Biotech, B.Sc, B.Com, B.A.*).
5. **Gautam College of Hotel Management**: Affiliated to HPU (*Bachelor of Hotel Management - BHM*).
6. **Gautam Polytechnic & ITI**: Approved by AICTE & HP Takniki Shiksha Board Dharamshala.

---

## 🌐 1-Click Deployment on Render

This repository includes a pre-configured `render.yaml` Blueprint and `_redirects` for 100% free hosting with automatic SSL and SPA routing on **Render**:

### Option 1: Automatic Blueprint (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** → **Blueprint**.
2. Connect your repository: `KarnailSingh87/gautam-group-of-colleges`.
3. Render will read `render.yaml` and set up everything automatically!

### Option 2: Manual Static Site
1. On [Render](https://dashboard.render.com/), click **New +** → **Static Site**.
2. Select repository `gautam-group-of-colleges`.
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Under **Redirects/Rewrites**:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
5. Click **Create Static Site**!

---

## 🚀 How to Run & Present to Client
- **Local Dev Server**: [http://localhost:5174/](http://localhost:5174/) or [http://localhost:5173/](http://localhost:5173/)
- **Production Bundle**: Built in `dist/` ready for Render, cPanel, Vercel, or Netlify deployment.

To start again in any terminal:
```bash
npm run dev
# or
npm run preview
```
