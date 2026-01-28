

export function Footer() {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8 mt-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 max-w-[400px] md:self-center md:justify-self-end">
                        <div className="hidden md:flex items-center h-8 mb-6">
                            <img
                                src="/Light-Theme-Zypher-Logo.png"
                                alt="Zypher Logo"
                                className="h-full w-auto block dark:hidden"
                            />
                            <img
                                src="/Dark-theme-zypher-logo.png"
                                alt="Zypher Logo"
                                className="h-full w-auto hidden dark:block"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm leading-4 mb-2">
                            The world's most private, secure, and anonymous crypto card platform.
                            Banking without the bank.
                        </p>
                        <p className="text-muted-foreground text-sm mt-4">
                            Reach our support team at
                        </p>
                        <p className="text-xl xxs:text-2xl xs:text-3xl font-bold text-black -mt-1 dark:text-white">support@zypher.cards</p>
                    </div>
                    <div className="justify-end">
                        <img
                            src="/darkmode-barcode.png"
                            alt="Zypher Cards Barcode"
                            className="w-full max-w-[320px] hidden dark:block"
                        />
                        <img
                            src="/darkmode-barcode.png"
                            alt="Zypher Cards Barcode"
                            className="w-full max-w-[320px] block dark:hidden"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
