import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../environments/environment';

interface TimelineContent {
  event: string;
  icon: string;
  date?: string;
  showDate?: boolean;
  link?: string;
}

interface ContactContent {
  title: string;
  url: string;
  icon: string;
  isSvg?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './_home.component-theme.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  aboutMeContent = {

    avatarUrl: `${env.assetsPath}/me-filtered.png`,
    avatarAlt: 'Aria Pahlavan',
    name: 'Aria Pahlavan',
    summary: 'Senior Software Engineer',
    description: `I'm known for
          aesthetically pleasing apps 🤩,
          blazingly fast apis 🔥,
          scalable and reactive designs 🚀,
          and ping-pong trick shots 🏓`
  };

  contactsContent: ContactContent[] = [
    {title: 'GitHub', icon: 'github', url: 'https://github.com/ariapahlavan', isSvg: true},
    {title: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ariapahlavan/', isSvg: true},
    {title: 'Stack Overflow', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/6042837/aria-pahlavan?tab=profile', isSvg: true},
    // {title: 'Twitter', icon: 'twitter', url: '#', isSvg: true},
    {title: 'Email', icon: 'alternate_email', url: 'mailto:arix.ap@gmail.com'},
    {title: 'Resume', icon: 'description', url: 'https://drive.google.com/file/d/1fg05gafB_x4u6Z3DakKk-KrFYORSWLLD/view'}
  ];

  timelineContent: TimelineContent[] = [
    {event: 'Cloud Developer certificate', icon: '🪪', date: 'Apr 2023', link: 'https://graduation.udacity.com/confirm/e/dc07ee4a-8627-11ed-94d9-af3fe601d98a'},
    {event: 'Graph Developer - Professional certificate', icon: '🪪', date: 'Jan 2023', link: 'https://www.apollographql.com/tutorials/certifications/81b1f1bd-ad24-4de0-b553-2b5328ea5df6'},
    {event: 'Graph Developer - Associate certificate', icon: '🪪', date: 'May 2022', link: 'https://www.apollographql.com/tutorials/certifications/7c334e7a-0d93-457a-bd0c-5d3c15c39d70'},
    {event: 'Senior Full-Stack Software Engineer at Toast', icon: '🧑🏻‍💻', date: 'Apr 2022', link: '/site/details?filepath=%2Fjobs%2Ftoast_sse.json'},
    {event: 'Senior Full-Stack Software Engineer at Visa', icon: '🧑🏻‍💻', date: 'Aug 2020', link: '/site/details?filepath=%2Fjobs%2Fvisa_sse.json'},
    {event: 'Full-Stack Software Engineer at Visa', icon: '🧑🏻‍💻', date: 'Dec 2018', link: '/site/details?filepath=%2Fjobs%2Fvisa_se.json'},
    {event: 'The University of Texas at Austin', icon: '👨🏻‍🎓', date: 'May 2018', link: 'https://lh3.googleusercontent.com/TOlzpA0h6flXrIBMv-YXqxWpQ3hPRcgtfm0hBwJc7S8OpiqaLrn5pNPUKfqzFnzDPbOfdDmUqkGyrL6nVJ__U95lnN3o6TJUHsO2m50wDP9XCKU_DNSD4ZAE5TC1NeG7YnLhveyIoguJgqZMGbii-aNS70P-deUD0xQiwr7VTDXL7zCX70jF8pU7jG2GZgFRFaYry_rDqvkCeq_JwHxeAefge5EU7TIl5bfHhnrZ-X1c-3TPUfCOMqq-aMbw9uMlPSM7t1FR6VvQdDKAznVVylx1YN9kcTXa_N1BM434ETh26zqB1U5ql_Xw9BRfHM46U4-XTwUweYSEk9HsQKJe0776IQib3-OMXwp2u8WJC7XU-dWSyY8KjCwlaisMZquMJ5q_qwGyd_5mvQ2vaWmbj2FqG8ZKzkM8EfBwDSthyn_phug4fPI2kQY_1sCbN1crwAZQFZkid0Nqe6NigZead7uAkVqgXZ_h-8eYf41yZlXeZV6S6SsmDCLgBwYrbgqXG3WifwJ-JXvGnSss8hxAjb2pPRILzb3Fuhg-aeONZHE2jWCVahQzdf1xoBQ7NET6k1LRFDQtMMnjwQG_xFMBIo-ruJwWOFirUaSEX9kWXfPCB9M7zLrN48vtB3Ue3Td0iO8tNm0oWlFpCpJw1YlFwGmE5Ed0M-XLLKqFJ9fwnxB4uRXRd1a1bok-MAd4Wip_7VpjK1Wn258bMXr013dh-m2V=w1854-h1390-no?authuser=0'},
    {event: 'Software Engineer Intern at Intel', icon: '🧑🏻‍💻', date: 'May 2017', link: '/site/details?filepath=%2Fjobs%2Fintel_sw_intern.json'},
  ];

  ngOnInit(): void {
  }
}
