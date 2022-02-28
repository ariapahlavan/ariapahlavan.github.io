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
    summary: 'Sr. Full-Stack SW Engineer',
    description: `I'm known for
          aesthetically pleasing apps 🤩,
          blazing fast apis 🔥,
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
    {event: 'Senior Full-Stack Software Engineer at Visa', icon: '🙌🏼', date: 'Aug 2020', link: '/site/details?filepath=%2Fjobs%2Fvisa_sse.json'},
    {event: 'Full-Stack Software Engineer at Visa', icon: '🧑🏻‍💻', date: 'Dec 2018', link: '/site/details?filepath=%2Fjobs%2Fvisa_se.json'},
    {event: 'Graduated from The University of Texas at Austin', icon: '👨🏻‍🎓', date: 'May 2018', link: '#'},
    {event: 'Software Engineer Intern at Intel', icon: '🧑🏻‍💻', date: 'May 2017', link: '/site/details?filepath=%2Fjobs%2Fintel_sw_intern.json'},
    {event: 'Electrical Engineer Intern at Luminant', icon: '🧑🏻‍💻', date: 'May 2016', link: '/site/details?filepath=%2Fjobs%2Fluminant_ee_intern.json'},
    {event: 'Software Engineer Intern at Texas Petawatt Laser', icon: '🧑🏻‍💻', date: 'Feb 2015', link: '/site/details?filepath=%2Fjobs%2Ftexas_petawatt_se_intern.json'},
    {event: 'Transferred to The University of Texas at Austin', icon: '🏫', date: 'Aug 2014', link: 'https://lh3.googleusercontent.com/TOlzpA0h6flXrIBMv-YXqxWpQ3hPRcgtfm0hBwJc7S8OpiqaLrn5pNPUKfqzFnzDPbOfdDmUqkGyrL6nVJ__U95lnN3o6TJUHsO2m50wDP9XCKU_DNSD4ZAE5TC1NeG7YnLhveyIoguJgqZMGbii-aNS70P-deUD0xQiwr7VTDXL7zCX70jF8pU7jG2GZgFRFaYry_rDqvkCeq_JwHxeAefge5EU7TIl5bfHhnrZ-X1c-3TPUfCOMqq-aMbw9uMlPSM7t1FR6VvQdDKAznVVylx1YN9kcTXa_N1BM434ETh26zqB1U5ql_Xw9BRfHM46U4-XTwUweYSEk9HsQKJe0776IQib3-OMXwp2u8WJC7XU-dWSyY8KjCwlaisMZquMJ5q_qwGyd_5mvQ2vaWmbj2FqG8ZKzkM8EfBwDSthyn_phug4fPI2kQY_1sCbN1crwAZQFZkid0Nqe6NigZead7uAkVqgXZ_h-8eYf41yZlXeZV6S6SsmDCLgBwYrbgqXG3WifwJ-JXvGnSss8hxAjb2pPRILzb3Fuhg-aeONZHE2jWCVahQzdf1xoBQ7NET6k1LRFDQtMMnjwQG_xFMBIo-ruJwWOFirUaSEX9kWXfPCB9M7zLrN48vtB3Ue3Td0iO8tNm0oWlFpCpJw1YlFwGmE5Ed0M-XLLKqFJ9fwnxB4uRXRd1a1bok-MAd4Wip_7VpjK1Wn258bMXr013dh-m2V=w1854-h1390-no?authuser=0'},
    {event: 'Went to Collin College', icon: '🏫', date: 'Jan 2012', link: 'https://www.collin.edu/news/PressReleases/2012-2013/20130531deansList.html'},
    {event: 'Moved to US', icon: '✈️', date: 'Nov 2011', link: '#'},
    {event: 'Went to Firooz Bahram High School', icon: '🏫', date: '', link: 'https://gashtool.com/multimedia/gallery/image?view=image&format=raw&type=orig&id=22966'},
    {event: 'Was born in Tehran, IR', icon: '👶🏻', date: 'Nov 19??', link: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Aerial_View_of_Tehran_and_Tochal.JPG'},
  ];

  ngOnInit(): void {
  }
}
