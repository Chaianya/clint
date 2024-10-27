export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "drawingroom", label: "Drawingroom" },
      { id: "bedroom", label: "Bedroom" },
      { id: "kitchen", label: "Kitchen" },
      { id: "bathroom", label: "Bathroom" },
      { id: "tempal", label: "Tempal" },
    ],
  },
  {
    label: "Materials",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Wood", label: "wood" },
      { id: "plastic", label: "Plastic" },
      { id: "metal", label: "Metal" },
      { id: "glass", label: "Glass" },
      { id: "leather", label: "Leather" },
      { id: "bamboo", label: "Bamboo" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "contactus",
    label: "Contact Us",
    path: "/shop/contactus",
  },
  {
    id: "aboutus",
    label: "About Us",
    path: "/shop/aboutus",
  },
  {
    id: "work",
    label: "Owr Work",
    path: "/shop/work",
  },
  
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  drawingroom: "Drawingroom",
  bedroom: "Bedroom",
  kitchen: "Kitchen",
  bathroom: "Bedroom",
  tempal: " Tempal",
};

export const brandOptionsMap = {
  plastic: "Plastic",
  wood: "Wood",
  metal: "Metal",
  glass: "Glass",
  leather: "Leather",
  bamboo: "Bamboo",
};

export const filterOptions = {
  category: [
    { id: "drawingroom", label: "Drawingroom" },
      { id: "bedroom", label: "Bedroom" },
      { id: "kitchen", label: "Kitchen" },
      { id: "bathroom", label: "Bathroom" },
      { id: "tempal", label: "Tempal" },
  ],
  brand: [
    { id: "Wood", label: "wood" },
      { id: "plastic", label: "Plastic" },
      { id: "metal", label: "Metal" },
      { id: "glass", label: "Glass" },
      { id: "leather", label: "Leather" },
      { id: "bamboo", label: "Bamboo" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
