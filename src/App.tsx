import React, { useState, useEffect } from 'react';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "/components/ui/avatar";
import { Button } from "/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "/components/ui/select";
import { Textarea } from "/components/ui/textarea";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a project description',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is another project description',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com',
    },
  ]);
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Recent Designing',
      icon: 'https://via.placeholder.com/50',
      description: 'This is a service description',
    },
    {
      id: 2,
      title: 'Portfolio Creation',
      icon: 'https://via.placeholder.com/50',
      description: 'This is another service description',
    },
  ]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handlePortfolioItemClick = (item: any) => {
    console.log(item);
  };

  const handleServiceHover = (service: any) => {
    console.log(service);
  };

  const handleContactFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contactForm);
    setIsFormSubmitted(true);
  };

  const handleContactFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/100" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold ml-4">Shibiraj R.</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="link" onClick={() => handleSectionChange('home')}>Home</Button>
          <Button variant="link" onClick={() => handleSectionChange('about')}>About</Button>
          <Button variant="link" onClick={() => handleSectionChange('portfolio')}>Portfolio</Button>
          <Button variant="link" onClick={() => handleSectionChange('services')}>Services</Button>
          <Button variant="link" onClick={() => handleSectionChange('contact')}>Contact</Button>
        </nav>
      </header>
      <main className="mb-4">
        {activeSection === 'home' && (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Aspiring Developer & Cybersecurity Enthusiast</h1>
            <p className="text-lg mb-4">This is a brief tagline</p>
            <Button variant="primary" onClick={() => handleSectionChange('portfolio')}>View Portfolio</Button>
          </section>
        )}
        {activeSection === 'about' && (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">I have skills in Java, Python, HTML, CSS, MySQL, Git, and Cybersecurity.</p>
            <p className="text-lg mb-4">I have achieved many things and I aspire to achieve more in the future.</p>
          </section>
        )}
        {activeSection === 'portfolio' && (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map((item) => (
                <Card key={item.id} onClick={() => handlePortfolioItemClick(item)}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={item.thumbnail} alt={item.title} />
                  </CardContent>
                  <CardFooter>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">View Live</a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}
        {activeSection === 'services' && (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Card key={service.id} onMouseOver={() => handleServiceHover(service)}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={service.icon} alt={service.title} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
        {activeSection === 'contact' && (
          <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <form onSubmit={handleContactFormSubmit}>
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" value={contactForm.name} onChange={handleContactFormChange} />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" value={contactForm.email} onChange={handleContactFormChange} />
              </div>
              <div className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={contactForm.message} onChange={handleContactFormChange} />
              </div>
              <Button variant="primary" type="submit">Send Message</Button>
              {isFormSubmitted && <p className="text-lg mt-4">Message sent successfully!</p>}
            </form>
          </section>
        )}
      </main>
      <footer className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/cbee..rawj_/" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/50" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/shibiraj-r/" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/50" alt="LinkedIn" />
          </a>
          <a href="https://github.com/shibi22" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/50" alt="GitHub" />
          </a>
          <a href="mailto:shibi73201@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/50" alt="Email" />
          </a>
        </div>
        <p className="text-lg">&copy; 2024 Shibiraj. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;