import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', guests: '2' });

  const tours = [
    {
      id: 1,
      title: 'Майами и пляжи',
      description: 'Экскурсия по Майами-Бич, Арт-Деко район, Ocean Drive',
      price: 120,
      duration: '4 часа',
      image: 'https://cdn.poehali.dev/projects/a66a70f1-074a-4f13-bc1d-ef159dd64f62/files/83225177-79ac-48ff-9134-4b76ebbb0590.jpg',
      category: 'Пляжный отдых'
    },
    {
      id: 2,
      title: 'Флорида Кис',
      description: 'Путешествие по островам, снорклинг, закаты над океаном',
      price: 180,
      duration: '8 часов',
      image: 'https://cdn.poehali.dev/projects/a66a70f1-074a-4f13-bc1d-ef159dd64f62/files/3c1e247f-d808-44ff-bddb-8f4aac6143d2.jpg',
      category: 'Приключения'
    },
    {
      id: 3,
      title: 'Эверглейдс',
      description: 'Сафари по болотам, наблюдение за аллигаторами и птицами',
      price: 95,
      duration: '5 часов',
      image: 'https://cdn.poehali.dev/projects/a66a70f1-074a-4f13-bc1d-ef159dd64f62/files/37080410-cf80-4434-abd6-d9fc66fb27ce.jpg',
      category: 'Природа'
    }
  ];

  const attractions = [
    { name: 'Диснейленд', icon: 'Castle', description: 'Парк развлечений мирового класса' },
    { name: 'Космический центр Кеннеди', icon: 'Rocket', description: 'История космических полётов' },
    { name: 'Пляж Клируотер', icon: 'Waves', description: 'Белоснежный песок и бирюзовая вода' },
    { name: 'Сиворлд Орландо', icon: 'Fish', description: 'Морской парк с касатками' }
  ];

  const handleBooking = (tour: any) => {
    setSelectedTour(tour);
    setBookingOpen(true);
  };

  const submitBooking = () => {
    console.log('Бронирование:', { tour: selectedTour, ...formData });
    setBookingOpen(false);
    setFormData({ name: '', email: '', phone: '', guests: '2' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Palmtree" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Флорида Тур</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#tours" className="hover:text-primary transition-colors">Туры</a>
            <a href="#routes" className="hover:text-primary transition-colors">Маршруты</a>
            <a href="#attractions" className="hover:text-primary transition-colors">Достопримечательности</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tours[0].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Откройте Флориду</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Солнечные пляжи, тропические острова и незабываемые приключения
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Compass" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Популярные туры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальное путешествие по Флориде из нашей коллекции туров
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="beach">Пляжные</TabsTrigger>
              <TabsTrigger value="nature">Природа</TabsTrigger>
              <TabsTrigger value="adventure">Активные</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    {tour.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      <span>Группа до 12</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-muted-foreground ml-2">(128 отзывов)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-primary">${tour.price}</span>
                    <span className="text-muted-foreground">/чел</span>
                  </div>
                  <Button onClick={() => handleBooking(tour)}>
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Забронировать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="attractions" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Достопримечательности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Главные места, которые стоит посетить во Флориде
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={attraction.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{attraction.name}</CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Красота Флориды в фотографиях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {tours.map((tour, index) => (
              <div key={index} className="relative h-72 overflow-hidden rounded-lg group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                    <p className="text-sm">{tour.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Mail" size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Готовы к приключениям?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами, и мы поможем спланировать ваше идеальное путешествие по Флориде
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +1 (305) 555-0123
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@floridatour.com
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Palmtree" size={28} className="text-primary" />
              <h3 className="text-xl font-bold text-white">Флорида Тур</h3>
            </div>
            <p className="text-sm">Откройте для себя солнечную Флориду с лучшими гидами</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Туры</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Пляжные туры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Природные парки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Городские экскурсии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Приключения</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Подписка</h4>
            <p className="text-sm mb-4">Получайте лучшие предложения</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 Флорида Тур. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Забронировать тур</DialogTitle>
            <DialogDescription>
              {selectedTour?.title} — ${selectedTour?.price}/чел
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Иван Иванов"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="ivan@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone" 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+1 (305) 555-0123"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Количество гостей</Label>
              <Input 
                id="guests" 
                type="number"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setBookingOpen(false)}>Отмена</Button>
            <Button onClick={submitBooking}>
              Подтвердить бронирование
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
