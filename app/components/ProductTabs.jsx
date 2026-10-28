import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DownloadIcon, Droplets, ExpandIcon, Layers, Shield, UserCircle2Icon } from "lucide-react";

// Mock data (keep as provided)
const productHighlights = [
    {
        icon: <Shield size={28} />,
        title: "Secure by design",
        description: "Hidden back pocket and lockable main zipper.",
    },
    {
        icon: <Droplets size={28} />,
        title: "Weather-ready shell",
        description: "Waterproof coating protects daily essentials.",
    },
    {
        icon: <ExpandIcon size={28} />,
        title: "Adjustable comfort",
        description: "Reinforced strap fits 76–122 cm.",
    },
    {
        icon: <Layers size={28} />,
        title: "Organized capacity",
        description: "Three compartments for phone, wallet and tablet.",
    },
];

const specifications = [
    [
        ["Product Name", "UrbanTrail Casual Chest Bag"],
        ["Model / Brand", "UT-CB901 / UrbanTrail"],
        ["Material / Lining", "900D Oxford / 210D polyester"],
        ["Capacity / Size", "5 L / 31 × 17 × 8 cm"],
        ["Weight / Colors", "0.38 kg / 9 options"],
        ["Closure / Waterproof", "Zipper / IPX4 coated"],
    ],
    [
        ["Application", "Commute, travel, outdoor"],
        ["MOQ / OEM-ODM", "100 pcs / Logo, color, packaging"],
        ["Certifications", "BSCI, REACH, ISO 9001"],
        ["Origin", "Guangdong, China"],
        ["Packaging", "OPP bag + export carton"],
        ["Warranty", "12 months"],
    ],
];

const companyProfileStatistics = [
    ["500K+", "Monthly capacity"],
    ["42 markets", "Export markets"],
    ["BSCI", "Audited factory"],
];

const ratingBars = [
    ["5 ★", 83.33, "102"],
    ["4 ★", 16.66, "18"],
    ["3 ★", 8.33, "6"],
];

// Define the font variables (replace with your actual font setup)
const fontRegular = "font-regular";
const fontBold = "font-bold";
const headingFont = "font-heading";

// Section refs mapping
const sectionRefs = {
    details: React.createRef(),
    specifications: React.createRef(),
    supplier: React.createRef(),
    reviews: React.createRef(),
};

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("details");
    const tabsListRef = useRef(null);

    const scrollToSection = (tabValue) => {
        const ref = sectionRefs[tabValue];
        if (ref && ref.current) {
            const headerOffset = 80; // Adjust based on your sticky header height
            const elementPosition = ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const handleTabChange = (value) => {
        setActiveTab(value);
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            scrollToSection(value);
        }, 50);
    };

    // Set up intersection observer to update active tab on scroll
    useEffect(() => {
        const observers = [];

        Object.entries(sectionRefs).forEach(([key, ref]) => {
            if (!ref.current) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveTab(key);
                        }
                    });
                },
                {
                    rootMargin: "-80px 0px -50% 0px",
                    threshold: 0,
                }
            );

            observer.observe(ref.current);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    // Helper to get tab label
    const getTabLabel = (value) => {
        const map = {
            details: "Product details",
            specifications: "Specifications",
            supplier: "Supplier profile",
            reviews: "Reviews (126)",
        };
        return map[value] || value;
    };

    return (
        <div>
            {/* Sticky Tabs */}
            <div
                ref={tabsListRef}
                className="sticky top-0 z-50 overflow-hidden rounded-t-sm border border-[#e3e6e8] bg-gray-200"
            >
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                    <TabsList
                        className="
                flex
                h-auto
                w-full
                justify-start
                gap-8
                overflow-x-auto
                rounded-none
                bg-transparent
                px-6
                scrollbar-none
                max-md:gap-3
                max-md:px-3
            "
                    >
                        {[
                            ["details", "Product details"],
                            ["specifications", "Specifications"],
                            ["supplier", "Supplier profile"],
                            ["reviews", "Reviews (126)"],
                        ].map(([value, label]) => (
                            <TabsTrigger
                                key={value}
                                value={value}
                                className={`
                        shrink-0
                        rounded-sm
                        px-3
                        py-3
                        ${fontRegular}
                        text-md
                        whitespace-nowrap
                        ${activeTab === value
                                        ? "bg-[#777] text-white"
                                        : "text-gray-500"
                                    }
                    `}
                            >
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            {/* All content sections always visible */}
            <Card className="rounded-xl border-[#e3e6e8] bg-white shadow-none mt-0 rounded-t-none">
                <CardContent className="p-0">
                    {/* Product Details Section */}
                    <div ref={sectionRefs.details} id="details" className="scroll-mt-20">
                        <div className="grid gap-8 p-6 lg:grid-cols-12">
                            <div className="flex flex-col gap-3 lg:col-span-8">
                                <h2 className={`${headingFont} text-lg leading-7 text-black`}>
                                    Built for the everyday carry market
                                </h2>
                                <p className={`${fontRegular} text-base leading-7 text-[#667085]`}>
                                    UrbanTrail combines a streamlined silhouette with wholesale-ready
                                    durability. The water-resistant 900D Oxford shell, anti-theft rear
                                    pocket and flexible storage make it a reliable choice for commuter,
                                    travel and promotional programs.
                                </p>
                                <div className="grid gap-4 pt-1 sm:grid-cols-2">
                                    {productHighlights.map((highlight) => (
                                        <Card
                                            key={highlight.title}
                                            className="rounded-xl border-0 bg-[#f5f6f7] shadow-none"
                                        >
                                            <CardContent className="p-3">
                                                <span className="text-green-600">{highlight.icon}</span>
                                                <h3 className={`mt-3 ${fontBold} text-base text-black`}>
                                                    {highlight.title}
                                                </h3>
                                                <p className={`${fontRegular} text-sm text-[#667085]`}>
                                                    {highlight.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                            <Card className="overflow-hidden rounded-xl border-0 bg-[#f5f6f7] shadow-none lg:col-span-4">
                                <CardContent className="p-0">
                                    <div>
                                        <img className="-mt-4 w-full rounded-t-xl" src="/pdp-images/p2.png" alt="product-2" />
                                    </div>
                                    <div className="p-2">
                                        <h3 className={`${fontBold} text-sm text-black`}>
                                            Ideal applications
                                        </h3>
                                        <p className={`${fontRegular} mt-1 text-sm text-[#667085]`}>
                                            Urban commuting · Travel retail · Corporate gifts ·<br />
                                            Outdoor promotions
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div
                        ref={sectionRefs.specifications}
                        id="specifications"
                        className="scroll-mt-20"
                    >
                        <section className="flex flex-col gap-4 p-6 pt-3">
                            <header className="flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
                                <div>
                                    <p className={`${fontBold} text-sm text-[#e86f17]`}>
                                        TECHNICAL DATA
                                    </p>

                                    <h2
                                        className={`${headingFont} text-2xl leading-8 text-black max-[360px]:text-xl max-[360px]:leading-7`}
                                    >
                                        Product specifications
                                    </h2>
                                </div>

                                <Button
                                    type="button"
                                    variant="link"
                                    className={`
            h-auto
            gap-1
            p-0
            ${fontBold}
            text-sm
            text-[#e86f17]
            whitespace-normal
            text-left
            max-md:self-start
        `}
                                >
                                    <span>Download specifications sheet</span>
                                    <DownloadIcon className="ml-2 h-4 w-4 shrink-0" />
                                </Button>
                            </header>
                            <Card className="overflow-hidden rounded-xl border-[#e3e6e8] bg-white shadow-none">
                                <CardContent className="grid p-0 lg:grid-cols-2">
                                    {specifications.map((column, columnIndex) => (
                                        <dl
                                            key={columnIndex}
                                            className={
                                                columnIndex === 0
                                                    ? "border-b border-[#e3e6e8] lg:border-b-0 lg:border-r"
                                                    : ""
                                            }
                                        >
                                            {column.map(([label, value], index) => (
                                                <div
                                                    key={label}
                                                    className={`grid grid-cols-2 ${index < column.length - 1
                                                        ? "border-b border-[#e3e6e8]"
                                                        : ""
                                                        }`}
                                                >
                                                    <dt
                                                        className={`bg-[#f5f6f7] p-3 ${fontBold} text-sm leading-5 text-black`}
                                                    >
                                                        {label}
                                                    </dt>
                                                    <dd
                                                        className={`p-3 ${fontRegular} text-sm leading-5 text-black`}
                                                    >
                                                        {value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    ))}
                                </CardContent>
                            </Card>
                        </section>
                    </div>

                    {/* Supplier Profile Section */}
                    <div
                        ref={sectionRefs.supplier}
                        id="supplier"
                        className="scroll-mt-20"
                    >
                        <div className="grid gap-6 p-6 pt-3 lg:grid-cols-12">
                            <Card className="h-[94%] rounded-xl border-[#e3e6e8] bg-white shadow-none lg:col-span-7">
                                <CardContent className="flex flex-col gap-1 p-6">
                                    <p className={`${fontBold} text-sm text-[#e86f17]`}>
                                        MANUFACTURING PARTNER
                                    </p>
                                    <h2 className={`${headingFont} text-2xl leading-8 text-black`}>
                                        Company profile
                                    </h2>
                                    <p className={`pt-2 ${fontRegular} text-sm leading-6 text-[#667085]`}>
                                        VeloGear has manufactured functional bags for international
                                        private-label buyers since 2012. Our 8,500 m² facility pairs
                                        automated cutting with 12 quality-control stations to deliver
                                        consistent, export-ready production.
                                    </p>
                                    <dl className="grid grid-cols-3 gap-3 pt-4">
                                        {companyProfileStatistics.map(([value, label]) => (
                                            <div key={label} className="rounded-[14px] bg-[#f5f6f7] p-3">
                                                <dt className={`${fontBold} text-sm text-black`}>{value}</dt>
                                                <dd className={`${fontRegular} text-sm text-[#667085]`}>
                                                    {label}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </CardContent>
                            </Card>
                            <Card className="h-[92.5%] overflow-hidden rounded-xl border-[#e3e6e8] bg-white shadow-none lg:col-span-5">
                                <img src="/pdp-images/m.png" className="w-full h-auto" alt="" />
                            </Card>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div
                        ref={sectionRefs.reviews}
                        id="reviews"
                        className="scroll-mt-20"
                    >
                        <section className="flex flex-col gap-5 rounded-xl bg-[#f5f6f7] px-6 pb-6 pt-9 m-6">
                            <header className="flex items-end justify-between">
                                <div>
                                    <p className={`${fontBold} text-sm text-[#e86f17]`}>
                                        BUYER FEEDBACK
                                    </p>
                                    <h2 className={`${headingFont} text-2xl leading-8 text-black`}>
                                        Customer reviews
                                    </h2>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className={`h-auto rounded-[14px] border-[#e3e6e8] bg-white px-4 py-[11px] ${fontBold} text-sm text-black hover:bg-white`}
                                >
                                    Write a review
                                </Button>
                            </header>
                            <div className="grid gap-6 lg:grid-cols-12">
                                <Card className="rounded-xl border-0 bg-white shadow-none lg:col-span-3">
                                    <CardContent className="px-3">
                                        <div className="flex items-end">
                                            <p className={`${fontBold} text-4xl leading-10 text-black`}>
                                                4.8
                                            </p>
                                            <span className={`${fontBold} text-lg leading-7 text-[#667085]`}>
                                                /5
                                            </span>
                                        </div>
                                        <p className="pt-1 text-base leading-6 text-[#e86f17]">★★★★★</p>
                                        <p className={`${fontRegular} text-sm text-[#667085]`}>
                                            Based on 126 verified reviews
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="rounded-xl border-0 bg-white shadow-none lg:col-span-4">
                                    <CardContent className="flex flex-col gap-3 px-3">
                                        {ratingBars.map(([label, percentage, count]) => (
                                            <div
                                                key={label}
                                                className="flex items-center gap-3"
                                            >
                                                <span
                                                    className={`w-8 shrink-0 ${fontRegular} text-sm text-black`}
                                                >
                                                    {label}
                                                </span>

                                                <Progress
                                                    value={percentage}
                                                    className="h-1 flex-1 rounded-full [&>div]:rounded-full [&>div]:bg-gray-200"
                                                />

                                                <span
                                                    className={`w-8 shrink-0 text-right ${fontRegular} text-sm text-black`}
                                                >
                                                    {count}
                                                </span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                <Card className="rounded-xl border-0 bg-white shadow-none lg:col-span-5">
                                    <CardContent className="flex flex-col gap-3 px-3 ">
                                        <div className="flex items-center gap-3">
                                            <span>
                                                <UserCircle2Icon className="h-8 w-8 text-[#e86f17]" />
                                            </span>
                                            <div>
                                                <p className={`${fontRegular} text-sm`}>
                                                    <strong className={`${fontBold} text-black`}>
                                                        Maya Chen{" "}
                                                    </strong>
                                                    <span className="text-[#667085]">· Verified buyer</span>
                                                </p>
                                                <p className="text-sm text-[#e86f17]">★★★★★</p>
                                            </div>
                                        </div>
                                        <blockquote className={`${fontRegular} text-sm leading-6 text-black`}>
                                            &quot;Excellent finish and custom logo execution. Our first
                                            retail shipment sold through in three weeks.&quot;
                                        </blockquote>
                                        <Button
                                            type="button"
                                            variant="link"
                                            className={`h-auto w-fit p-0 ${fontBold} text-sm text-[#e86f17]`}
                                        >
                                            View all 126 reviews
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductTabs;