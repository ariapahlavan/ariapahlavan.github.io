import { Component, OnInit } from '@angular/core';

interface TimelineContent {
  event: string;
  icon: string;
}

interface ContactContent {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './_home.component-theme.scss']
})
export class HomeComponent implements OnInit {
  aboutMeContent = {

    avatarUrl: 'https://avatars.githubusercontent.com/u/8824819?s=400&u=caf1f3662ae94428df3b098a721cfa24d4b72bc0&v=4',
    avatarAlt: 'Aria Pahlavan',
    name: 'Aria Pahlavan',
    summary: 'Sr. Full-Stack SW Engineer',
    description: `My talents are
          aesthetically pleasing apps 🤩,
          blazing fast apis 🔥,
          scalable and reactive designs 🚀,
          and trick shots in ping pong 🏓`
  };

  contactsContent: ContactContent[] = [
    {title: 'GitHub', icon: 'fab fa-github-alt', url: 'https://github.com/ariapahlavan'},
    {title: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ariapahlavan/'},
    {title: 'Stack Overflow', icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/6042837/aria-pahlavan?tab=profile'},
    // {title: 'Twitter', icon: 'fab fa-twitter', url: '#'},
    {title: 'Email', icon: 'fas fa-at', url: 'mailto:arix.ap@gmail.com'},
    {title: 'Resume', icon: 'fas fa-align-left', url: '#'}
  ];

  timelineContent: TimelineContent[] = [
    {event: 'Published an article about Progressive Web Apps', icon: '📄'},
    {event: 'Co-authored and filed a patent at Visa', icon: '📜'},
    {event: 'Senior Full-Stack Software Engineer at Visa', icon: '🙌'},
    {event: 'Published an article about Reactive Programming', icon: '📄'},
    {event: 'Published an article about Functional Programming', icon: '📄'},
    {event: 'Full-Stack Software Engineer at Visa', icon: '🧑‍💻'},
    {event: 'Graduated from The University of Texas at Austin', icon: '👨‍🎓'},
    {event: 'Software Engineer Intern at Intel', icon: '🧑‍💻'},
    {event: 'Electrical Engineer Intern at Luminant', icon: '🧑‍💻'},
    {event: 'Software Engineer Intern at Texas Petawatt Laser', icon: '🧑‍💻'},
    {event: 'Transferred to The University of Texas at Austin', icon: '🏫'},
    {event: 'Cashier at Walmart', icon: '🛒'},
    {event: 'Started college at Collin College', icon: '🏫'},
    {event: 'Moved to US', icon: '✈️'},
    {event: 'Studied at Firooz Bahram High School', icon: '🏫'},
    {event: 'Studied at Rostam Abadian Middle School', icon: '🏫'},
    {event: 'Studied at Jamshid Jam Elementary School', icon: '🏫'},
    {event: 'Was born in Tehran, IR', icon: '🍼'},
  ];

  ngOnInit(): void {
  }
}
