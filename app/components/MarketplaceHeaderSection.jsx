import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    HeartIcon,
    MenuIcon,
    MessageCircle,
    SearchIcon,
    ShoppingCartIcon,
    User2Icon,
} from "lucide-react";

const navigationLinks = [
    { label: "Ready to Ship", active: true },
    { label: "Trade Assurance", active: false },
    { label: "Buyer Central", active: false },
    { label: "Help Center", active: false },
    { label: "Sell on TradePort", active: false },
];

const accountActions = [
    { label: "Messages", icon: <MessageCircle size={16} /> },
    { label: "Favorites", icon: <HeartIcon size={16} /> },
    { label: "Cart", icon: <ShoppingCartIcon size={16} /> },
];

export const MarketplaceHeaderSection = () => {
    return (
        <header className="w-full border-b border-[#e3e6e8] bg-white">
            {/* Main Header */}
            <div className="mx-auto flex w-full max-w-[1360px] items-center gap-6 px-10 py-4 max-md:gap-3 max-md:px-4 max-md:py-3">
                {/* Logo */}
                <a
                    href="#"
                    aria-label="TradePort home"
                    className="inline-flex shrink-0 items-center gap-2"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 [font-family:'Inter',Helvetica] text-xl font-bold leading-7 text-[#232323] max-md:h-8 max-md:w-8 max-md:text-lg">
                        T
                    </span>

                    <span className="[font-family:'Inter',Helvetica] text-xl font-normal leading-7 text-[#232323] max-md:hidden">
                        TradePort
                    </span>
                </a>

                {/* Categories */}
                <Button
                    type="button"
                    variant="outline"
                    className="h-auto min-h-11 shrink-0 gap-2 rounded-[14px] border-[#d7dce0] bg-white px-4 py-[11px] shadow-none hover:bg-white max-md:min-h-10 max-md:px-3"
                >
                    <MenuIcon className="h-4 w-4" strokeWidth={2} />

                    <span className="[font-family:'Liberation_Sans-Regular',Helvetica] text-sm font-normal leading-5 text-[#667085] max-[400px]:hidden">
                        Categories
                    </span>
                </Button>

                {/* Search */}
                <form className="flex min-h-11 min-w-0 flex-1 items-center overflow-hidden rounded-[14px] border border-[#d7dce0] bg-white max-md:min-h-10">
                    <Input
                        type="search"
                        aria-label="Search products, suppliers and RFQs"
                        placeholder="Search products, suppliers and RFQs"
                        className="h-11 min-w-0 flex-1 border-0 px-4 py-0 [font-family:'Liberation_Sans-Regular',Helvetica] text-sm text-black placeholder:text-[#00000080] focus-visible:ring-0 focus-visible:ring-offset-0 max-md:h-10 max-md:px-3 max-[400px]:text-xs"
                    />

                    <Button
                        type="submit"
                        aria-label="Search"
                        className="h-11 w-11 shrink-0 rounded-xl bg-amber-500 text-[#232323] hover:bg-[#d76413] max-md:h-10 max-md:w-10"
                    >
                        <SearchIcon className="h-4 w-4" strokeWidth={2} />
                    </Button>
                </form>

                {/* Account Actions - Desktop */}
                <nav
                    aria-label="Account actions"
                    className="inline-flex shrink-0 items-center gap-4 max-lg:hidden"
                >
                    {accountActions.map((action) => (
                        <a
                            key={action.label}
                            href="#"
                            className="inline-flex flex-col items-center gap-1"
                        >
                            <span>{action.icon}</span>

                            <span className="[font-family:'Liberation_Sans-Regular',Helvetica] text-center text-sm font-normal leading-5 text-black">
                                {action.label}
                            </span>
                        </a>
                    ))}

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 border-l border-[#e3e6e8] pl-4"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
                            <User2Icon />
                        </div>

                        <span className="[font-family:'Liberation_Sans-Regular',Helvetica] text-center text-sm font-normal leading-5">
                            <span className="block text-black">
                                Sign in
                            </span>

                            <span className="block text-[#667085]">
                                Register free
                            </span>
                        </span>
                    </a>
                </nav>

                {/* Mobile User Icon */}
                <a
                    href="#"
                    aria-label="Account"
                    className="hidden shrink-0 max-lg:inline-flex"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
                        <User2Icon className="h-5 w-5" />
                    </div>
                </a>
            </div>

            {/* Secondary Navigation */}
            <nav
                aria-label="Marketplace navigation"
                className="mx-auto flex w-full max-w-[1360px] items-center gap-6 overflow-x-auto px-10 pb-3 scrollbar-none max-md:gap-5 max-md:px-4"
            >
                {navigationLinks.map((link) => (
                    <a
                        key={link.label}
                        href="#"
                        className={`[font-family:'Liberation_Sans-Regular',Helvetica] shrink-0 whitespace-nowrap text-xs font-normal leading-3 ${
                            link.active
                                ? "text-[#e86f17]"
                                : "text-black"
                        }`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};