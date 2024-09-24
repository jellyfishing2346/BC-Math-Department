import React from 'react';
import FacultyProfile from './FacultyProfile';

const facultyMembers = [
  {
    name: "Jeffrey Suzuki",
    title: "Department Chair",
    email: "jsuzuki@brooklyn.cuny.edu",
    imageUrl: "https://www.cityguideny.com/heads/jeff-suzuki.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/jeffrey-suzuki/"
  },
  {
    name: "Christian G. Benes",
    title: "Deputy Chair (Undergraduate)",
    email: "cbenes@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Christian-Benes-230517-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/christian-g-benes/"
  },
  {
    name: "Jun Hu",
    title: "Deputy Chair (Undergraduate)",
    email: "junhu@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Jun-Hu-230517-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/jun-hu/"
  },
  {
    name: "Heidi Goodson",
    title: "Deputy Chair (Graduate)",
    email: "heidi.goodson@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Heidi-Goodson-240301-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/heidi-goodson/"
  },
  {
    name: "Mark Gibson",
    title: "Lecturer",
    email: "mgibson@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Mark-Gibson-230517-Bio-2.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/mark-gibson/"
  },
  {
    name: "David Aulicino",
    title: "Associate Professor",
    email: "david.aulicino@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-David-Aulicino-230523-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/david-aulicino/"
  },
  {
    name: "Laurel Cooley",
    title: "Professor",
    email: "lcooley@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Laurel-Cooley-231206-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/laurel-cooley/"
  },
  {
    name: "Daniel Ginsberg",
    title: "Associate Professor",
    email: "daniel.ginsberg@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Daniel-Ginsberg-231213-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/daniel-ginsberg/"
  },
  {
    name: "Diana Hubbard",
    title: "Associate Professor",
    email: "diana.hubbard@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/MATH-BIO-Diana-Hubbard-221128-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/diana-hubbard/"
  },
  {
    name: "Yechezkel Steiner",
    title: "Lecturer",
    email: "yechezkel.steiner@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Yechezkel-Steiner-231213-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/yechezkel-steiner/"
  },
  {
    name: "Liem Nguyen",
    title: "Lecturer / Doctoral Lecturer",
    email: "liem.nguyen@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-Liem-Nguyen-230621-Bio-2.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/liem-nguyen/"
  },
  {
    name: "Andrew Will",
    title: "Lecturer / Doctoral Lecturer",
    email: "Andrew.Will@brooklyn.cuny.edu",
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/536x870-MATH-BIO-David-Andrew-Will-231213-Bio.jpg",
    profileLink: "https://www.brooklyn.edu/faculty-staff/andrew-will/"
  }
];

function FacultyList() {
  return (
    <div className="faculty-list">
      <h2>Faculty Members</h2>
      <div className="faculty-grid">
        {facultyMembers.map((member, index) => (
          <FacultyProfile
            key={index}
            name={member.name}
            title={member.title}
            email={member.email}
            imageUrl={member.imageUrl}
            profileLink={member.profileLink}
          />
        ))}
      </div>
    </div>
  );
}

export default FacultyList;
