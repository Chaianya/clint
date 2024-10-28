'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
  BedIcon,
  SofaIcon,
  PizzaIcon,
  BathIcon,
  Check
} from "lucide-react";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { getFeatureImages } from "@/store/common-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import ProductDetailsDialog from "@/components/shopping-view/product-details";

const categoriesWithIcon = [
  { id: "drawingroom", label: "Drawing Room", icon: SofaIcon },
  { id: "bedroom", label: "Bed Room", icon: BedIcon },
  { id: "kitchen", label: "Kitchen", icon: PizzaIcon },
  { id: "bathroom", label: "Bath Room", icon: BathIcon },
  { id: "tempal", label: "Temple", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Minimalism", icon: Shirt },
  { id: "adidas", label: "Coastal", icon: WashingMachine },
  { id: "puma", label: "Industrial", icon: ShoppingBasket },
  { id: "levi", label: "Traditional", icon: Airplay },
  { id: "zara", label: "Scandinavian", icon: Images },
  { id: "h&m", label: "Bohemian", icon: Heater },
];

function PricingCards() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "₹84,016",
      description: "Perfect for small spaces",
      features: [
        "2 room designs",
        "3D visualization",
        "Furniture recommendations",
        "Color palette selection"
      ]
    },
    {
      name: "Pro",
      price: "₹168,116",
      description: "Ideal for full home makeovers",
      features: [
        "5 room designs",
        "3D visualization",
        "Furniture recommendations",
        "Color palette selection",
        "Custom furniture design",
        "2 revision rounds"
      ]
    },
    {
      name: "Premium",
      price: "₹336,316",
      description: "For luxury and complex projects",
      features: [
        "Unlimited room designs",
        "3D visualization",
        "Furniture recommendations",
        "Color palette selection",
        "Custom furniture design",
        "Unlimited revision rounds",
        "On-site consultation",
        "Project management"
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {pricingPlans.map((plan, index) => (
        <Card key={index} className="flex flex-col">
          <CardContent className="flex flex-col h-full mt-7">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            <div className="mb-4 flex-grow">
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => {
                
                const message = `✨ *Hello,* I'd like to inquire about this plan: 
                     *Name:* ${plan.name}
                     *Description:* ${plan.description}
                     *Features:* 
                    ${plan.features.map(feature => `  • ${feature}`).join("\n")}
                     *Price:* ${plan.price}`;

                const whatsappURL = `https://wa.me/${import.meta.env.VITE_MOBILE_NO}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, "_blank");
              }}

              size="sm"
              className="w-full mt-auto"
            >
              Contact To Team
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.img
              src={featureImageList[currentSlide]?.image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-white"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 text-center"
              >
                Elevate Your Style
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-xl md:text-2xl text-center max-w-2xl"
              >
                Discover the latest fashion trends
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <Button className="mt-8" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + featureImageList.length) % featureImageList.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
          variant="outline"
          size="icon"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
          variant="outline"
          size="icon"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </motion.button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featureImageList.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-4 left-4 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-lg"
          animate={{
            rotate: [0, 360],
            borderColor: ['#ffffff', '#f3f3f3', '#e1e1e1', '#ffffff'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          interior
        </motion.div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">All Featured Interiors</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {featureImageList.slice(0, 12).map((imageItem, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <img
                src={imageItem.image}
                alt={`Featured ${index + 1}`}
                className="w-full h-48 object-cover mb-4"
              />
              <span className="font-bold">Image {index + 1}</span>
              <Button
                onClick={() => {
                  const message = `Hello, I'd like to inquire about this image: ${imageItem.image}`;
                  const whatsappURL = `https://wa.me/${import.meta.env.VITE_MOBILE_NO}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, "_blank");
                }}
                variant="secondary"
                size="sm"
                className="mt-2"
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section className="py-12 bg-gray-50">
        <div className="container  mx-auto px-4">
          <h2 className="text-3xl  font-bold text-center mb-12">Our Pricing</h2>
          <PricingCards />
        </div>
      </section>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
