
import Navbar from '../Navbar'
import Footer from '../Footer'
import './dishes.css';

const menuItems = [
    {
        category: "Appetizers",
        items: [
            { id: 1, name: "Bruschetta", description: "Grilled bread topped with tomatoes, basil, and olive oil.", price: "$8.99" },
            { id: 2, name: "Stuffed Mushrooms", description: "Mushrooms filled with garlic and cream cheese.", price: "$10.99" },
            { id: 3, name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: "$5.99" },
            { id: 4, name: "Caesar Salad", description: "Classic Caesar salad with croutons and parmesan.", price: "$7.99" },
            { id: 5, name: "Mozzarella Sticks", description: "Fried mozzarella with marinara sauce.", price: "$9.99" }
        ]
    },
    {
        category: "Main Courses",
        items: [
            { id: 6, name: "Grilled Salmon", description: "Fresh salmon fillet with a side of vegetables.", price: "$18.99" },
            { id: 7, name: "Ribeye Steak", description: "Juicy steak grilled to perfection with mashed potatoes.", price: "$22.99" },
            { id: 8, name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara and cheese.", price: "$16.99" },
            { id: 9, name: "Pasta Primavera", description: "Fresh vegetables sautéed with pasta in a garlic sauce.", price: "$14.99" },
            { id: 10, name: "Vegetarian Pizza", description: "Wood-fired pizza with seasonal vegetables.", price: "$15.99" },
            
        ]
    },
    {
        category: "Desserts",
        items: [
            { id: 11, name: "Cheesecake", description: "Classic cheesecake with a graham cracker crust.", price: "$6.99" },
            { id: 12, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center.", price: "$7.99" },
            { id: 13, name: "Tiramisu", description: "Layered Italian dessert with coffee and mascarpone.", price: "$8.99" },
            { id: 14, name: "Creme Brulee", description: "Vanilla custard topped with caramelized sugar.", price: "$7.99" },
            { id: 11, name: "Cheesecake", description: "Classic cheesecake with a graham cracker crust.", price: "$6.99" },
            { id: 12, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center.", price: "$7.99" },
            { id: 13, name: "Tiramisu", description: "Layered Italian dessert with coffee and mascarpone.", price: "$8.99" }

        ]
    },
    {
        category: "Beverages",
        items: [
            { id: 15, name: "Espresso", description: "Rich, freshly brewed espresso.", price: "$3.50" },
            { id: 16, name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: "$4.50" },
            { id: 17, name: "Iced Tea", description: "Refreshing black tea served cold.", price: "$3.00" },
            { id: 18, name: "Lemonade", description: "Freshly squeezed lemons with a hint of mint.", price: "$3.50" },
            { id: 19, name: "Sparkling Water", description: "Chilled sparkling mineral water.", price: "$2.50" },
            { id: 15, name: "Espresso", description: "Rich, freshly brewed espresso.", price: "$3.50" },
            { id: 16, name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: "$4.50" },
            { id: 17, name: "Iced Tea", description: "Refreshing black tea served cold.", price: "$3.00" }

        ]
    }
];
const Dishes = () => {
    return (
        <>
        <Navbar/>
        
        
        <section className="menu-section">
            <h2 className="menu-title">Our Menu</h2>
            {menuItems.map((category, index) => (
                <div key={index} className="menu-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="menu-items">
                        {category.items.map(item => (
                            <div key={item.id} className="menu-item">
                                <h4 className="item-name">{item.name}</h4>
                                <p className="item-description">{item.description}</p>
                                <span className="item-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
        <Footer/>
        </>
    );
};

export default Dishes;
