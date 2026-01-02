import { useEffect, useState } from 'react'
import { useSiteData } from '../siteData.jsx'

export default function About() {
  const { ewbIndia } = useSiteData()
  const [index, setIndex] = useState(0)

  const carouselItems = [
    'Clean water & sanitation',
    'Renewable energy',
    'Infrastructure & housing',
    'Education & technology'
  ]

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % carouselItems.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section about-bg">
      <div className="container">

        <div className="card about-carousel" style={{ padding: 16, marginBottom: 20 }}>
          <h3 style={{ textAlign: 'center', marginTop: 0 }}>Focus areas</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            <button
              aria-label="Previous"
              className="button"
              onClick={() => setIndex((i) => (i - 1 + carouselItems.length) % carouselItems.length)}
            >
              ‹
            </button>

            <div style={{ flex: '0 0 70%', maxWidth: 720 }}>
              <div style={{ padding: 24, textAlign: 'center' }}>
                <h4 style={{ margin: 0 }}>{carouselItems[index]}</h4>
                <p className="muted" style={{ marginTop: 8 }}>
                  {carouselItems[index] === 'Clean water & sanitation' && 'Projects and solutions for safe water, sanitation, and hygiene.'}
                  {carouselItems[index] === 'Renewable energy' && 'Solar, wind and other renewable systems for communities and institutions.'}
                  {carouselItems[index] === 'Infrastructure & housing' && 'Sustainable, affordable infrastructure and housing solutions.'}
                  {carouselItems[index] === 'Education & technology' && 'Education initiatives and technology-enabled learning for students.'}
                </p>
              </div>
            </div>

            <button
              aria-label="Next"
              className="button"
              onClick={() => setIndex((i) => (i + 1) % carouselItems.length)}
            >
              ›
            </button>
          </div>
        </div>

  <h2 className="about-heading">About</h2>

        <div className="card about-content" style={{ marginBottom: 20 }}>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }} className="muted">
            {`We are a non-profit NGO dedicated to help economically
weaker sections of society and encourage engineering students to become
humanitarian engineers in the country. Through our Professional Chapters, and Student
Chapters in engineering institutions, we take up projects mainly addressing the following
United Nations Sustainable Development Goals:
4 Quality Education
5 Gender Equality
6 Clean Water and Sanitation
9 Industry, Innovation and Infrastructure

Our Mission is to partner with corporate & social organizations, involve students and
professionals, and offer sustainable solutions in the areas of Water, Sanitation, Energy,
Health & Education to improve the quality of life for common people.
Our vision is to nurture and motivate students and professionals to undertake real life
sustainable social projects and create Global Leaders.
Project based Learning promoted by EWB – India in its Student Chapters, with focus
towards projects to improve the quality of life for the weaker sections of society, enables
them to develop the skills required for future and for success in their profession. These
include innovation, design thinking, problem solving and leadership.
Technical events conducted by our chapters lead to advanced learning in latest
technologies for the professional members and students. We aim at responsible use of
technology.`}
          </div>
        </div>

  <br />     
  <h2 className="members-heading">Members of the club</h2>

  <h3 className="members-subheading">Core Committee</h3>
        <div className="members-grid" style={{ marginBottom: 18 }}>
          <div className="member-card">
            <img src="/images/cc1.png" alt="Core Committee 1" />
            <div className="member-name">President</div>
          </div>
          <div className="member-card">
            <img src="/images/cc2.png" alt="Core Committee 2" />
            <div className="member-name">Vice President</div>
          </div>
          <div className="member-card">
            <img src="/images/cc3.png" alt="Core Committee 3" />
            <div className="member-name">Secretary</div>
          </div>
          <div className="member-card">
            <img src="/images/cc4.png" alt="Core Committee 4" />
            <div className="member-name">Treasurer</div>
          </div>
        </div>

  <h3 className="members-subheading">Executive Committee</h3>
        <div className="members-grid" style={{ marginBottom: 18 }}>
          <div className="member-card"><img src="/images/ec1.png" alt="Executive Committee 1" /><div className="member-name">Joint Secretaries - Events</div></div>
          <div className="member-card"><img src="/images/ec2.png" alt="Executive Committee 2" /><div className="member-name">Joint Secretaries - Projects & Tech</div></div>
          <div className="member-card"><img src="/images/ec3.png" alt="Executive Committee 3" /><div className="member-name">Joint Secretaries - Media & PR</div></div>
          <div className="member-card"><img src="/images/ec4.png" alt="Executive Committee 4" /><div className="member-name">Joint Secretaries - Design</div></div>
          <div className="member-card"><img src="/images/ec5.png" alt="Executive Committee 5" /><div className="member-name">Deputy Secretary</div></div>
        </div>

  <h3 className="members-subheading">Senior Co-ordinators</h3>
        <div className="members-grid" style={{ marginBottom: 18 }}>
          <div className="member-card"><img src="/images/sc1.png" alt="Senior Coordinator 1" /><div className="member-name">Senior Co-ordinators</div></div>
        </div>
      </div>
    </section>
  )
}
