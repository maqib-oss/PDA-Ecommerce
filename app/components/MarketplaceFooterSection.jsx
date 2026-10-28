const footerColumns = [
    {
      title: "TradePort",
      description: "Source confidently from verified manufacturers.",
      isBrand: true,
    },
    {
      title: "About",
      links: ["About TradePort", "Careers", "Newsroom"],
    },
    {
      title: "Customer Service",
      links: ["Help Center", "Shipping", "Contact"],
    },
    {
      title: "Buyer Protection",
      links: ["Trade Assurance", "Safe payments", "Returns"],
    },
    {
      title: "Supplier Resources",
      links: ["Sell on TradePort", "Supplier membership", "Privacy · Terms"],
    },
  ];
  
  export const MarketplaceFooterSection = () => {
    return (
      <section className="flex w-full flex-col items-start pt-10">
        <footer className="w-full border-t border-[#e3e6e8] bg-[#f5f6f7]">
          <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-8 p-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerColumns.map((column) => (
              <section
                key={column.title}
                aria-labelledby={`${column.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
                className={`flex flex-col items-start gap-3 ${
                  column.isBrand ? "pb-3" : ""
                }`}
              >
                <h2
                  id={`${column.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
                  className={
                    column.isBrand
                      ? "[font-family:'Inter',Helvetica] text-lg font-normal leading-7 text-black"
                      : "[font-family:'Liberation_Sans-Bold',Helvetica] text-sm font-bold leading-5 text-black"
                  }
                >
                  {column.title}
                </h2>
                {column.isBrand ? (
                  <p className="[font-family:'Liberation_Sans-Regular',Helvetica] text-sm font-normal leading-5 text-[#667085]">
                    {column.description}
                  </p>
                ) : (
                  <nav aria-label={column.title}>
                    <ul className="space-y-0">
                      {column.links?.map((link) => (
                        <li key={link}>
                          <button
                            type="button"
                            className="[font-family:'Liberation_Sans-Regular',Helvetica] h-auto p-0 text-left text-sm font-normal leading-5 text-[#667085] transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667085] focus-visible:ring-offset-2"
                          >
                            {link}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </section>
            ))}
          </div>
          <div className="flex min-h-[61px] w-full items-center justify-center border-t border-[#e3e6e8] px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-2 [font-family:'Liberation_Sans-Regular',Helvetica] text-center text-sm font-normal leading-5 text-[#667085]">
              <span>© 2024 TradePort Marketplace ·</span>
              <img
                className="h-3.5 w-3.5"
                alt=""
                aria-hidden="true"
                src="/iconify-icon-12.svg"
              />
              <button
                type="button"
                className="h-auto p-0 text-sm font-normal leading-5 text-[#667085] transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667085] focus-visible:ring-offset-2"
              >
                English / USD
              </button>
            </div>
          </div>
        </footer>
      </section>
    );
  };
  