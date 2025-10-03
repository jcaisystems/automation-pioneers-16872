export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-3">JCAI Consulting</h3>
              <p className="text-muted-foreground text-sm">
                Building custom AI operating systems that run businesses autonomously.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://jcai-consulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://jcai-consulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="https://jcai-consulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} JCAI Consulting. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
