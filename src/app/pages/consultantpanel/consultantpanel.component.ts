import { Component } from '@angular/core';

@Component({
  selector: 'app-consultantpanel',
  templateUrl: './consultantpanel.component.html',
  styleUrls: ['./consultantpanel.component.css']
})
export class ConsultantpanelComponent {
  searchTerm = '';

  doctors = [
    { image: '/assets/dr.png', name: 'Dr. Baset Hakim', department: 'General Medicine' },
    { image: '/assets/dr.png', name: 'Dr. Ranjeet Patil', department: 'General Medicine' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Ipsita Malakar', department: 'General Medicine' },
    { image: '/assets/dr.png', name: 'Dr. Gourish Karande', department: 'General Medicine' },

    { image: '/assets/femaledr.jpg', name: 'Dr. Harsha Jadhav', department: 'Gynaecology' },
    { image: '/assets/dr.png', name: 'Dr. Pankaj', department: 'Gynaecology' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Ketki Raut', department: 'Gynaecology' },

    { image: '/assets/dr.png', name: 'Dr. Indrajeet Thorat', department: 'Paediatrics' },
    { image: '/assets/dr.png', name: 'Dr. Sumit Nitnaware', department: 'Paediatrics' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Kirti Shrotriya', department: 'Paediatrics' },

    { image: '/assets/dr.png', name: 'Dr. Rohan Mhaske', department: 'Orthopedics' },
    { image: '/assets/dr.png', name: 'Dr. Viren Patil', department: 'Orthopedics' },
    { image: '/assets/dr.png', name: 'Dr. Aniruddha Deshpande', department: 'Orthopedics' },
    { image: '/assets/dr.png', name: 'Dr. Vishal Kadam', department: 'Orthopedics' },
    { image: '/assets/dr.png', name: 'Dr. A K Singh', department: 'Orthopedics' },

    { image: '/assets/dr.png', name: 'Dr. Shrinath', department: 'Spine Surgeon' },
    { image: '/assets/dr.png', name: 'Dr. Nitish Agarwal', department: 'Spine Surgeon' },

    { image: '/assets/dr.png', name: 'Dr. Manoj Pawar', department: 'Plastic Surgeon' },
    { image: '/assets/dr.png', name: 'Dr. Pranav Thussey', department: 'Plastic Surgeon' },

    { image: '/assets/dr.png', name: 'Dr. Rahul Kulkarni', department: 'Medicine Oncology' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Reshma Puranik', department: 'Medicine Oncology' },

    { image: '/assets/dr.png', name: 'Dr. Rahul Pavshere', department: 'Surgical Oncology' },

    { image: '/assets/dr.png', name: 'Dr. Sagar More', department: 'Anesthesiology' },
    { image: '/assets/dr.png', name: 'Dr. Rana Singh Patil', department: 'Anesthesiology' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Rashida Miyasaheb', department: 'Anesthesiology' },

    { image: '/assets/dr.png', name: 'Dr. Parag Gulhane', department: 'Urology' },
    { image: '/assets/dr.png', name: 'Dr. Kunal Pisre', department: 'Urology' },
    { image: '/assets/dr.png', name: 'Dr. Sagar Bhalerao', department: 'Urology' },

    { image: '/assets/dr.png', name: 'Dr. Parmeshwar Bambrule', department: 'General & Bariatric Surgery' },
    { image: '/assets/dr.png', name: 'Dr. Satish Pattanshetty', department: 'General & Bariatric Surgery' },
    { image: '/assets/dr.png', name: 'Dr. Amol Muley', department: 'General & Bariatric Surgery' },

    { image: '/assets/femaledr.jpg', name: 'Dr. Shital Bansal', department: 'Dietician' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Sejal Lele Joshi', department: 'Dietician' },

    { image: '/assets/dr.png', name: 'Dr. Archana Singh', department: 'Physiotherapy' },
    { image: '/assets/dr.png', name: 'Dr. Amruta Khilwani', department: 'Physiotherapy' },
    { image: '/assets/dr.png', name: 'Dr. Shubham Khilwani', department: 'Physiotherapy' },
    { image: '/assets/femaledr.jpg', name: 'Dr. Devyani Gawande', department: 'Physiotherapy' },

    { image: '/assets/dr.png', name: 'Dr. Ranjeet Dalvi', department: 'Nephrology' },
    { image: '/assets/dr.png', name: 'Dr. Suhas Mondhe', department: 'Nephrology' },

    { image: '/assets/dr.png', name: 'Dr. Rajat Agnihotri', department: 'Radiology' },
    { image: '/assets/dr.png', name: 'Dr. Ajit Thombre', department: 'Neurology' }
  ];


  // searchDoctor(event: any) {
  //   const value = event.target.value.toLowerCase();
  //   const cards = document.getElementsByClassName('doctor-card');

  //   for (let i = 0; i < cards.length; i++) {
  //     const text = cards[i].textContent?.toLowerCase() || '';
  //     (cards[i] as HTMLElement).style.display =
  //       text.includes(value) ? 'block' : 'none';
  //   }
  // }

// searchDoctor(event: any) {

//   const value = event.target.value.toLowerCase();
//   const doctors = document.getElementsByClassName('doctor-item');

//   for (let i = 0; i < doctors.length; i++) {

//     const text = doctors[i].textContent?.toLowerCase() || '';

//     if (text.includes(value)) {
//       (doctors[i] as HTMLElement).style.display = 'block';
//     } else {
//       (doctors[i] as HTMLElement).style.display = 'none';
//     }

//   }

//   // Hide empty departments
//   const sections = document.getElementsByClassName('department-section');

//   for (let i = 0; i < sections.length; i++) {

//     const visibleDoctors = sections[i].querySelectorAll('.doctor-item[style*="block"]');

//     if (visibleDoctors.length === 0) {
//       (sections[i] as HTMLElement).style.display = 'none';
//     } else {
//       (sections[i] as HTMLElement).style.display = 'block';
//     }

//   }

// }

searchDoctor(event: any) {

  const value = event.target.value.toLowerCase();
  const doctors = document.getElementsByClassName('doctor-item');

  for (let i = 0; i < doctors.length; i++) {

    const text = doctors[i].textContent?.toLowerCase() || '';

    if (text.includes(value)) {
      (doctors[i] as HTMLElement).style.display = '';   // keep bootstrap layout
    } else {
      (doctors[i] as HTMLElement).style.display = 'none';
    }

  }

  // Hide empty departments
  const sections = document.getElementsByClassName('department-section');

  for (let i = 0; i < sections.length; i++) {

    const visibleDoctors = sections[i].querySelectorAll('.doctor-item:not([style*="none"])');

    if (visibleDoctors.length === 0) {
      (sections[i] as HTMLElement).style.display = 'none';
    } else {
      (sections[i] as HTMLElement).style.display = '';
    }

  }

}

  // searchDoctor(event: any) {

  //   const value = event.target.value.toLowerCase();
  //   const cards = document.getElementsByClassName('doctor-card');

  //   for (let i = 0; i < cards.length; i++) {

  //     const text = cards[i].textContent?.toLowerCase() || '';

  //     if (text.includes(value)) {
  //       (cards[i] as HTMLElement).style.display = 'flex';
  //     } else {
  //       (cards[i] as HTMLElement).style.display = 'none';
  //     }

  //   }
  // }

}
