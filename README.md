# Mercury Properties

A premium property management website for Kenya. Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.

## What We Do

**For House Seekers:**
- Contact us with your location and budget
- We find real, verified options
- You get a call back within 2 hours with matches

**For Property Owners:**
- Contact us about your property
- We visit and assess it
- We find tenants and manage everything (security, taxes, rent collection)

## Features

- 🏠 **Simple Contact Forms**: Typeform-style forms for both house seekers and property owners
- 📊 **Admin Dashboard**: View all inquiries at `/admin` (password: `mercury2024`)
- 🎨 **Premium Design**: Dark luxury theme with glassmorphism and smooth animations
- 🇰🇪 **Kenya-focused**: Local locations, KES currency, WhatsApp integration
- 📱 **WhatsApp Integration**: Direct contact via 0752 794 698

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mercury-properties
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/mercury_properties?schema=public"
   ADMIN_PASSWORD="mercury2024"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/apply/renter` | House seeker contact form |
| `/apply/landlord` | Property owner contact form |
| `/admin` | Admin dashboard (password protected) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/applications/renter` | Submit house seeker inquiry |
| `GET` | `/api/applications/renter` | Get all renter inquiries |
| `POST` | `/api/applications/landlord` | Submit property owner inquiry |
| `GET` | `/api/applications/landlord` | Get all landlord inquiries |

## Database Schema

**RenterApplication:**
- fullName, phone, location, budgetRange, requirements (optional)

**LandlordApplication:**
- fullName, phone, propertyType, location, message (optional)

## Contact

- **Phone/WhatsApp**: 0752 794 698
- **Admin Dashboard**: `/admin` (password: `mercury2024`)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Database Options

- [Neon](https://neon.tech) - Serverless PostgreSQL
- [Supabase](https://supabase.com) - PostgreSQL with extras
- [Railway](https://railway.app) - Easy hosting

---

Built with ❤️ for Kenya's property market
