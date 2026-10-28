'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2Icon, CheckIcon, HeartIcon, MinusIcon, PlusIcon, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductImageGallery from "./ProductImageGallery";


const fontRegular =
    "[font-family:'Liberation_Sans-Regular',Helvetica] font-normal";
const fontBold = "[font-family:'Liberation_Sans-Bold',Helvetica] font-bold";
const headingFont = "[font-family:'Inter',Helvetica] font-semibold";

const shippingDetails = [
    ["Methods", "Express, Air, Sea, Rail"],
    ["Processing", "7–10 business days"],
    ["Delivery / cost", "7–25 days · from US$38.20"],
    ["Regions", "Worldwide, 180+ countries"],
];

const companyStatistics = [
    ["4.8/5", "Supplier rating"],
    ["12 yrs", "In business"],
    ["96%", "Response rate"],
];

const recommendedProducts = [
    {
        image: "/pdp-images/p1.png",
        name: "Compact Tech Sling Bag",
        price: "$5.20-7.10",
        details: "MOQ 100 pcs · ★ 4.9 (84)",
    },
    {
        image: "/pdp-images/p2.png",
        name: "Outdoor Crossbody Pack",
        price: "$6.10-8.40",
        details: "MOQ 80 pcs · ★ 4.8 (72)",
    },
    {
        image: "/pdp-images/p1.png",
        name: "Waterproof Waist Bag",
        price: "$3.90-5.60",
        details: "MOQ 120 pcs · ★ 4.7 (51)",
    },
    {
        image: "/pdp-images/p2.png",
        name: "Travel Shoulder Pouch",
        price: "$4.30-6.20",
        details: "MOQ 100 pcs · ★ 4.9 (96)",
    },
    {
        image: "/pdp-images/p1.png",
        name: "Business Utility Sling",
        price: "$5.80-7.90",
        details: "MOQ 100 pcs · ★ 4.8 (44)",
    },
    {
        image: "/pdp-images/p2.png",
        name: "Minimal Commuter Bag",
        price: "$4.60-6.50",
        details: "MOQ 150 pcs · ★ 4.8 (68)",
    },
];

export const ProductDetailSection = () => {
    const [quantity, setQuantity] = useState(100);
    const [material, setMaterial] = useState("Oxford 900D");
    const [activeColor, setActiveColor] = useState("Black");
    const [activeTab, setActiveTab] = useState('details');

    const updateQuantity = (amount) => {
        setQuantity((currentQuantity) => Math.max(100, currentQuantity + amount));
    };

    return (
        <section className="w-full px-4 py-0 sm:px-6 lg:px-10">
            <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-5 px-0 py-5 lg:px-10">
                <Breadcrumb>
                    <BreadcrumbList
                        className={`gap-2 ${fontRegular} text-xs text-[#667085]`}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Bags &amp; Luggage</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Chest Bags</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[#232323]">
                                Casual Chest Bag
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid gap-6 lg:grid-cols-12">

                    {/* Image gallery */}
                    <ProductImageGallery />

                    {/* Product information */}
                    <article className="flex flex-col gap-3 lg:col-span-7">
                        <div className="flex flex-wrap items-center gap-3">
                            <span
                                className={`inline-flex items-center gap-1 rounded-full bg-[#eaf6f1] px-3 py-1 ${fontBold} text-sm text-[#175b44]`}
                            >
                                <span>
                                    <CheckCircle2Icon className="h-3 w-3" strokeWidth={2} />
                                </span>
                                Verified Supplier
                            </span>
                            <span className={`${fontRegular} text-sm text-[#667085]`}>
                                Guangzhou VeloGear Co., Ltd.
                            </span>
                        </div>
                        <h1
                            className={`${headingFont} text-3xl leading-[37.5px] text-[#232323]`}
                        >
                            UrbanTrail™ Casual Chest Bag — Waterproof
                            <br />
                            Crossbody Sling with USB Port
                        </h1>
                        <div
                            className={`flex flex-wrap items-center gap-4 ${fontRegular} text-sm`}
                        >
                            <span>
                                <strong className={`${fontBold} text-[#e86f17]`}>★ 4.8 </strong>
                                <span className="text-[#667085]">(126 reviews)</span>
                            </span>
                            <span className="text-[#667085]">1,860 orders</span>
                            <span className="inline-flex items-center gap-1 text-[#06875d]">
                                <img
                                    className="h-3.5 w-3.5"
                                    alt=""
                                    aria-hidden="true"
                                    src="/iconify-icon-1.svg"
                                />
                                Trade Assurance
                            </span>
                        </div>

                        <Card className="rounded-xl border-0 bg-[#fff3e8] shadow-none">
                            <CardContent className="px-5">
                                <div className="flex items-end gap-4">
                                    <p
                                        className={`${headingFont} text-3xl leading-9 text-[#e86f17]`}
                                    >
                                        $4.80 - 6.90
                                    </p>
                                    <span
                                        className={`${fontRegular} pb-1 text-sm text-[#667085]`}
                                    >
                                        / piece
                                    </span>
                                </div>
                                <p
                                    className={`pb-2 ${fontRegular} text-sm leading-5 text-[#667085]`}
                                >
                                    Price varies by quantity and custom finish
                                </p>
                                <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-[#e3e6e8] pt-4">
                                    {[
                                        ["MOQ", "100 pieces"],
                                        ["In stock", "8,420 pieces"],
                                        ["Customization", "OEM / ODM available"],
                                    ].map(([label, value]) => (
                                        <div key={label}>
                                            <dt className={`${fontRegular} text-sm text-[#667085]`}>
                                                {label}
                                            </dt>
                                            <dd className={`${fontBold} text-sm text-black`}>
                                                {value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col gap-4 pt-2">
                            <div className="flex flex-wrap items-center gap-5">
                                <span className={`w-20 ${fontBold} text-sm text-black`}>
                                    Color
                                </span>
                                <div className="flex flex-wrap items-center gap-2">
                                    {[
                                        ["Black", "bg-[#232323]"],
                                        ["Gray", "bg-[#f5f6f7]"],
                                        ["Khaki", "bg-[#fff3e8]"],
                                    ].map(([color, colorClass]) => (
                                        <button
                                            key={color}
                                            type="button"
                                            aria-label={color}
                                            aria-pressed={activeColor === color}
                                            onClick={() => setActiveColor(color)}
                                            className={`h-9 w-9 rounded-full border border-[#e3e6e8] ${colorClass} ${activeColor === color
                                                ? "ring-2 ring-[#e86f17] ring-offset-2"
                                                : ""
                                                }`}
                                        />
                                    ))}
                                    <span
                                        className={`${fontRegular} ml-2 text-sm text-[#667085]`}
                                    >
                                        Black, Gray, Khaki + 6 custom colors
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5">
                                <span className={`w-20 ${fontBold} text-sm text-black`}>
                                    Material
                                </span>
                                <div className="flex gap-2">
                                    {["Oxford 900D", "Recycled PET"].map((option) => (
                                        <Button
                                            key={option}
                                            type="button"
                                            variant="outline"
                                            onClick={() => setMaterial(option)}
                                            className={`h-auto rounded-[14px] px-4 py-2 ${fontRegular} text-sm text-black hover:bg-white ${material === option
                                                ? `border-2 border-[#e86f17] ${fontBold}`
                                                : "border-[#e3e6e8]"
                                                }`}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5">
                                <span className={`w-20 ${fontBold} text-sm text-black`}>
                                    Quantity
                                </span>
                                <div className="inline-flex items-center rounded-[14px] border border-[#d7dce0]">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        aria-label="Decrease quantity"
                                        onClick={() => updateQuantity(-1)}
                                        className="h-10 w-10 rounded-none p-0 text-black hover:bg-transparent"
                                    >
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <output
                                        className={`flex w-10 justify-center ${fontBold} text-sm text-black`}
                                    >
                                        {quantity}
                                    </output>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        aria-label="Increase quantity"
                                        onClick={() => updateQuantity(1)}
                                        className="h-10 w-10 rounded-none p-0 text-black hover:bg-transparent"
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <span className={`${fontRegular} text-sm text-[#667085]`}>
                                    pieces
                                </span>
                            </div>
                        </div>

                        <Card className="mt-1 rounded-xl border-[#e3e6e8] shadow-none">
                            <CardContent className="flex flex-col gap-3 p-3 pt-0">
                                <div className="flex items-start gap-3">
                                    <span><Truck size={22} className="text-[#e86f17]" /></span>
                                    <div className="flex-1">
                                        <h2 className={`${fontBold} text-base text-black`}>
                                            Ship to United States
                                        </h2>
                                        <p className={`${fontRegular} text-sm text-[#667085]`}>
                                            Express delivery from US$38.20 · Estimated delivery: Sep
                                            18 - 24
                                        </p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="link"
                                        className={`h-auto p-0 ${fontBold} text-sm text-[#e86f17]`}
                                    >
                                        Change
                                    </Button>
                                </div>
                                <p
                                    className={`flex items-center gap-2 ${fontRegular} text-sm text-[#667085]`}
                                >
                                    <span>
                                        <ShieldCheck size={22} className="text-[#e86f17]" />
                                    </span>
                                    Secure payments · 30-day refund policy · On-time delivery
                                    protection
                                </p>
                            </CardContent>
                        </Card>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button
                                type="button"
                                className={`h-auto flex-1 rounded-[14px] bg-amber-500 px-[53px] py-3 ${fontBold} text-base text-black hover:bg-[#e86f17]/90 max-[360px]:min-w-0 max-[360px]:px-4`}
                            >
                                Buy Now
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className={`h-auto flex-1 rounded-[14px] border-[#e86f17] px-6 py-3 ${fontBold} text-base text-[#e86f17] hover:bg-[#fff3e8] hover:text-[#e86f17] max-[360px]:min-w-0 max-[360px]:px-3`}
                            >
                                Contact Supplier
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className={`h-auto flex-1 rounded-[14px] border-[#e3e6e8] px-10 py-3 ${fontBold} text-base text-black hover:bg-[#f5f6f7] max-[360px]:min-w-0 max-[360px]:px-4`}
                            >
                                Add to Cart
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                aria-label="Add product to favorites"
                                className="m-0 h-12 w-12 shrink-0 rounded-[14px] border-[#e3e6e8] p-0 font-bold hover:bg-red-600 hover:text-white"
                            >
                                <HeartIcon size={28} />
                            </Button>
                        </div>
                    </article>
                </div>

                {/* Shipping & delivery */}
                <div className="grid gap-6 pt-3 lg:grid-cols-2">
                    <Card className="rounded-xl border-[#e3e6e8] bg-white shadow-none p-0">
                        <CardContent className="flex flex-col gap-5 px-6 py-3">
                            <header className="flex items-center justify-between">
                                <h2 className={`${headingFont} text-lg text-black`}>
                                    Shipping &amp; delivery
                                </h2>
                                <span>
                                    <Truck size={22} className="text-[#e86f17]" />
                                </span>
                            </header>
                            <dl className="flex flex-col gap-4">
                                {shippingDetails.map(([label, value], index) => (
                                    <div
                                        key={label}
                                        className={`flex justify-between gap-4 ${index < shippingDetails.length - 1
                                            ? "border-b border-[#e3e6e8] pb-3"
                                            : ""
                                            }`}
                                    >
                                        <dt className={`${fontRegular} text-sm text-[#667085]`}>
                                            {label}
                                        </dt>
                                        <dd
                                            className={`text-right ${fontRegular} text-sm text-black`}
                                        >
                                            {value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <div
                                className={`flex items-center gap-2 rounded-[14px] bg-[#eaf6f1] p-3 ${fontRegular} text-sm text-[#175b44]`}
                            >
                                <span><ShieldCheck size={22} className="text-[#175b44]" /></span>
                                Buyer protection covers payment, dispatch and quality.
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-xl border-[#e3e6e8] bg-white shadow-none">
                        <CardContent className="flex flex-col gap-5 p-6">
                            <header className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className={`${headingFont} text-lg text-black`}>
                                        Guangzhou VeloGear Co., Ltd.
                                    </h2>
                                    <p className={`${fontRegular} text-sm text-[#667085]`}>
                                        Bags &amp; luggage manufacturer
                                    </p>
                                </div>
                                <span
                                    className={`rounded-full bg-[#eaf6f1] px-3 py-1 ${fontBold} text-sm text-green-600 border border-green-600`}
                                >
                                    Verified
                                </span>
                            </header>
                            <dl className="grid grid-cols-3 gap-4">
                                {companyStatistics.map(([value, label]) => (
                                    <div key={label}>
                                        <dt className={`${fontBold} text-2xl leading-8 text-black`}>
                                            {value}
                                        </dt>
                                        <dd className={`${fontRegular} text-sm text-[#667085]`}>
                                            {label}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <p className={`${fontRegular} text-sm text-[#667085]`}>
                                Guangzhou, China · 162 employees · 8,900+ transactions ·
                                Responds within 2h
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className={`h-auto rounded-[14px] border-[#e86f17] py-2 ${fontBold} text-base text-[#e86f17] hover:bg-[#fff3e8] hover:text-[#e86f17]`}
                                >
                                    Send Inquiry
                                </Button>
                                <Button
                                    type="button"
                                    className={`h-auto rounded-[14px] bg-amber-500 py-2 ${fontBold} text-base text-black hover:bg-[#e86f17]/90`}
                                >
                                    Visit Store
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* product tabs */}
                <ProductTabs />

                {/* recommended products */}
                <section className="flex flex-col gap-4 pt-3">
                    <header className="flex items-end justify-between">
                        <div>
                            <p className={`${fontBold} text-sm text-[#e86f17]`}>
                                MORE FROM THIS SUPPLIER
                            </p>
                            <h2 className={`${headingFont} text-2xl leading-8 text-black`}>
                                Recommended products
                            </h2>
                        </div>
                        <Button
                            type="button"
                            variant="link"
                            className={`h-auto gap-1 p-0 ${fontBold} text-sm text-[#e86f17]`}
                        >
                            See all products
                            <ArrowRight size={18} className="text-[#e86f17]" />
                        </Button>
                    </header>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {recommendedProducts.map((product) => (
                            <Card
                            key={product.name}
                            className="overflow-hidden rounded-xl border-[#e3e6e8] bg-white p-0 shadow-none"
                        >
                            <CardContent className="p-0">
                                {/* Product Image */}
                                <div className="relative h-[220px] w-full overflow-hidden max-[360px]:h-[180px]">
                                    <img
                                        className="h-full w-full object-cover"
                                        alt={product.name}
                                        src={product.image}
                                    />
                        
                                    <Button
                                        type="button"
                                        variant="outline"
                                        aria-label={`Add ${product.name} to favorites`}
                                        className="absolute right-2 top-2 h-7 w-7 rounded-full border-[#e3e6e8] bg-white p-0 hover:bg-red-600 hover:text-white"
                                    >
                                        <HeartIcon className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                        
                                {/* Product Details */}
                                <div className="flex min-w-0 flex-col p-3 max-[360px]:p-2.5">
                                    <h3
                                        className={`
                                            min-h-10
                                            ${fontBold}
                                            text-sm
                                            leading-5
                                            text-black
                                            line-clamp-2
                                        `}
                                    >
                                        {product.name}
                                    </h3>
                        
                                    <p
                                        className={`pt-2 ${fontBold} text-base text-[#e86f17] max-[360px]:text-sm`}
                                    >
                                        {product.price}
                                    </p>
                        
                                    <p
                                        className={`
                                            ${fontRegular}
                                            text-xs
                                            leading-4
                                            text-[#667085]
                                            line-clamp-2
                                        `}
                                    >
                                        {product.details}
                                    </p>
                        
                                    <p
                                        className={`
                                            py-2
                                            ${fontRegular}
                                            text-xs
                                            leading-4
                                            text-black
                                            line-clamp-2
                                        `}
                                    >
                                        VeloGear · Guangzhou{" "}
                                        <CheckIcon className="inline h-3 w-3 shrink-0 text-[#06875d]" />
                                    </p>
                        
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className={`
                                            h-auto
                                            min-h-10
                                            w-full
                                            rounded-[14px]
                                            border-[#e86f17]
                                            py-[11px]
                                            ${fontBold}
                                            text-xs
                                            text-[#e86f17]
                                            hover:bg-[#fff3e8]
                                            hover:text-[#e86f17]
                                        `}
                                    >
                                        Quick Inquiry
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};
