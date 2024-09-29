// Import statements are not needed when using in-browser Babel
// We'll use the global React object instead

const { useState } = React;

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;
const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, className, ...props }) => (
  <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input className={`border rounded px-2 py-1 ${className}`} {...props} />
);

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block mb-1">
    {children}
  </label>
);

const Table = ({ children }) => <table className="w-full">{children}</table>;
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableCell = ({ children }) => <td className="border px-4 py-2">{children}</td>;
const TableHead = ({ children }) => <th className="border px-4 py-2">{children}</th>;
const TableHeader = ({ children }) => <thead>{children}</thead>;
const TableRow = ({ children }) => <tr>{children}</tr>;

const Tabs = ({ children, value, onValueChange }) => (
  <div>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { active: child.props.value === value, onValueChange })
    )}
  </div>
);

const TabsContent = ({ children, value, active }) => (
  active ? <div>{children}</div> : null
);

const TabsList = ({ children }) => <div className="flex mb-4">{children}</div>;

const TabsTrigger = ({ children, value, active, onValueChange }) => (
  <button
    className={`px-4 py-2 ${active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    onClick={() => onValueChange(value)}
  >
    {children}
  </button>
);

const Dialog = ({ children, open, onOpenChange }) => (
  open ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onOpenChange })
        )}
      </div>
    </div>
  ) : null
);

const DialogContent = ({ children }) => <div>{children}</div>;
const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;
const DialogTrigger = ({ children, asChild, ...props }) => (
  asChild ? React.cloneElement(children, props) : <button {...props}>{children}</button>
);

const Select = ({ children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, setIsOpen, onValueChange })
      )}
    </div>
  );
};

const SelectContent = ({ children, isOpen }) => (
  isOpen ? <div className="absolute top-full left-0 bg-white border rounded mt-1">{children}</div> : null
);

const SelectItem = ({ children, value, onValueChange, setIsOpen }) => (
  <div
    className="px-2 py-1 cursor-pointer hover:bg-gray-100"
    onClick={() => {
      onValueChange(value);
      setIsOpen(false);
    }}
  >
    {children}
  </div>
);

const SelectTrigger = ({ children, isOpen, setIsOpen }) => (
  <div className="border rounded px-2 py-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
    {children}
  </div>
);

const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

// Icons (simplified versions)
const Icon = ({ className }) => <span className={`inline-block w-4 h-4 ${className}`} />;
const BarChart = (props) => <Icon {...props}>📊</Icon>;
const LineChart = (props) => <Icon {...props}>📈</Icon>;
const PieChart = (props) => <Icon {...props}>🥧</Icon>;
const ArrowRight = (props) => <Icon {...props}>➡️</Icon>;
const Phone = (props) => <Icon {...props}>📞</Icon>;
const MessageSquare = (props) => <Icon {...props}>💬</Icon>;
const MessageCircle = (props) => <Icon {...props}>🗨️</Icon>;
const Facebook = (props) => <Icon {...props}>👍</Icon>;
const Linkedin = (props) => <Icon {...props}>💼</Icon>;
const Instagram = (props) => <Icon {...props}>📷</Icon>;
const Users = (props) => <Icon {...props}>👥</Icon>;
const DollarSign = (props) => <Icon {...props}>💲</Icon>;
const TrendingUp = (props) => <Icon {...props}>📈</Icon>;
const Plus = (props) => <Icon {...props}>➕</Icon>;
const X = (props) => <Icon {...props}>❌</Icon>;
const Send = (props) => <Icon {...props}>📤</Icon>;
const ChevronLeft = (props) => <Icon {...props}>⬅️</Icon>;
const ChevronRight = (props) => <Icon {...props}>➡️</Icon>;

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', origin: 'Facebook', lastEngagement: '2023-09-15', leadScore: 8 },
    { id: 2, name: 'Jane Smith', origin: 'LinkedIn', lastEngagement: '2023-09-14', leadScore: 7 },
    { id: 3, name: 'Bob Johnson', origin: 'Direct Call', lastEngagement: '2023-09-13', leadScore: 9 },
  ]);
  const [newContact, setNewContact] = useState({ name: '', origin: '', leadScore: 5 });
  const [isAddContactDialogOpen, setIsAddContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'John', message: 'Hey team, any updates on the new leads?', timestamp: '10:30 AM' },
    { id: 2, user: 'Sarah', message: 'I just closed a deal with ABC Corp!', timestamp: '10:35 AM' },
    { id: 3, user: 'Mike', message: 'Great job, Sarah! What was the deal size?', timestamp: '10:37 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const [carouselItems, setCarouselItems] = useState([
    { id: 1, name: 'Sarah Johnson', title: 'Top Performer', sales: '$250,000', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Michael Chen', title: 'Rising Star', sales: '$181,000', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Emily Rodriguez', title: 'Best Closer', sales: '$220,000', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'David Kim', title: 'Rookie of the Year', sales: '$150,000', image: 'https://via.placeholder.com/100' },
  ]);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const addContact = () => {
    const contact = {
      id: contacts.length + 1,
      ...newContact,
      lastEngagement: new Date().toISOString().split('T')[0],
    };
    setContacts([...contacts, contact]);
    setNewContact({ name: '', origin: '', leadScore: 5 });
    setIsAddContactDialogOpen(false);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage = {
        id: chatMessages.length + 1,
        user: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  const nextCarouselItem = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevCarouselItem = () => {
    setCurrentCarouselIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Multi-Channel Sales Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Top Sales Representatives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="flex items-center justify-center">
              <Button onClick={prevCarouselItem} className="absolute left-0 z-10">
                <ChevronLeft />
              </Button>
              <div className="flex items-center space-x-4 overflow-hidden">
                {carouselItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex-shrink-0 text-center transition-all duration-300 ease-in-out ${
                      index === currentCarouselIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
                    }`}
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <p className="text-lg font-bold text-green-600">{item.sales}</p>
                  </div>
                ))}
              </div>
              <Button onClick={nextCarouselItem} className="absolute right-0 z-10">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Traffic</CardTitle>
                <BarChart />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-gray-500">+20.1% from last month</p>
              </CardContent>
            </Card>
            {/* Add more cards for Total Contacts, Total Sales, and Conversion Rate */}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Channel Performance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Facebook />
                  <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="ml-2">45%</span>
                </div>
                {/* Add more channel performance bars */}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact Name</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Conversion Time</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Facebook</TableCell>
                    <TableCell>2023-09-15 14:30</TableCell>
                    <TableCell>$500</TableCell>
                  </TableRow>
                  {/* Add more table rows */}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="search">Search</Label>
                    <Input id="search" placeholder="Search contacts..." />
                  </div>
                  {/* Add more filter options */}
                </div>
                <Dialog open={isAddContactDialogOpen} onOpenChange={setIsAddContactDialogOpen}>
                  <DialogTrigger asChild>
                    <Button><Plus /> Add New Contact</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Contact</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={newContact.name}
                          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                        />
                      </div>
                      {/* Add more input fields for new contact */}
                      <Button onClick={addContact}>Add Contact</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Channel Origin</TableHead>
                      <TableHead>Last Engagement</TableHead>
                      <TableHead>Lead Score</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.origin}</TableCell>
                        <TableCell>{contact.lastEngagement}</TableCell>
                        <TableCell>{contact.leadScore}</TableCell>
                        <TableCell>
                          <div className="space-x-2">
                            <Button><Phone /></Button>
                            <Button><MessageSquare /></Button>
                            <Button><MessageCircle /></Button>
                            <Button onClick={() => removeContact(contact.id)}><X /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add Pipeline and Analytics tabs content */}

      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Channel Integrations</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Facebook Integration</span>
                  <input type="checkbox" className="toggle" />
                </div>
                {/* Add more integration toggles */}
              </div>
            </div>
            {/* Add more settings sections */}
          </div>
        </CardContent>
      </Card>

      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setIsChatOpen(!isChatOpen)}>
          <MessageSquare />
          Team Chat
        </Button>
        {isChatOpen && (
          <Card className="absolute bottom-12 right-0 w-80 h-96 flex flex-col">
            <CardHeader>
              <CardTitle>Team Chat</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
              <div className="space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="bg-gray-100 p-2 rounded">
                    <div className="font-semibold">{msg.user}</div>
                    <div>{msg.message}</div>
                    <div className="text-xs text-gray-500">{msg.timestamp}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));