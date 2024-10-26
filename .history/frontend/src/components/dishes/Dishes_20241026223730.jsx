import Menu  from './Menu';
import './dishes.css';

const menuItems = [
    {
        category: "Appetizers",
        items: [
            { id: 1, name: "Bruschetta", description: "Grilled bread topped with tomatoes, basil, and olive oil.", price: "$8.99" },
            { id: 2, name: "Stuffed Mushrooms", description: "Mushrooms filled with garlic and cream cheese.", price: "$10.99" }
        ]
    },
    {
        category: "Main Courses",
        items: [
            { id: 3, name: "Grilled Salmon", description: "Fresh salmon fillet with a side of vegetables.", price: "$18.99" },
            { id: 4, name: "Ribeye Steak", description: "Juicy steak grilled to perfection with mashed potatoes.", price: "$22.99" }
        ]
    },
    {
        category: "Desserts",
        items: [
            { id: 5, name: "Cheesecake", description: "Classic cheesecake with a graham cracker crust.", price: "$6.99" },
            { id: 6, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center.", price: "$7.99" }
        ]
    }
];

const Dishes = () => {
    return (
        <>
        <Menu/>
        
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
        
    );
};

export default Dishes;
