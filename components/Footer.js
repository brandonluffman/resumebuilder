import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="container-fluid footer-container" id="services">
           <div className='footer-top'>
            <div className='footer-brand-container'>
              <div className='footer-brand-img'>
                  <img src='/logo.png' className='footer-brand-logo'></img>
                  {/* <img src='/modern-logo.png' alt="Brand Logo" className='footer-brand-logo' loading="lazy" /> */}
                  <h2 className='footer-brand-header'>ResumeBuilderAI</h2>
              </div>
              
              <div className='social-icons'>
                <a href='https://twitter.com/PhxntomTech' target='_blank' rel='noreferrer' aria-label="Twitter"><FontAwesomeIcon className="fa-brands fa-twitter social-icon" icon={faTwitter} alt='Social Icon' /></a>
                <a href='https://www.facebook.com/profile.php?id=100084723462596' target='_blank' rel='noreferrer' aria-label="Facebook"><FontAwesomeIcon className="fa-brands fa-facebook social-icon" icon={faFacebookF} alt='Social Icon' /></a>
                <a href='https://www.instagram.com/phxntomtechnologies/' target='_blank' rel='noreferrer' aria-label="Instagram"><FontAwesomeIcon className="fa-brands fa-instagram social-icon" icon={faInstagram} alt='Social Icon' /></a>
                <a href='https://www.linkedin.com/company/phxntomtech' target='_blank' rel='noreferrer' aria-label="Linkedin" ><FontAwesomeIcon className="fa-brands fa-linkedin social-icon" icon={faLinkedinIn} alt='Social Icon' /></a>
              </div>
              </div>
              
              <div className='footer-links-container'>
                          <div className='footer-links'>
                            <div className='footer-links-header'><p className='footer-link-header'>Features</p></div>
                            <Link href='/test'><div className='footer-link'>Resume Tester</div></Link>
                            <Link href='/build'><div className='footer-link'>Resume Builder</div></Link>
                            <Link href='/tailor'><div className='footer-link'>Resume Tailor</div></Link>
                            {/* <Link href='/blogs'><div className='footer-link'>Cover Letter Builder</div></Link> */}
                          </div>
                          <div className='footer-links'>
                            <div className='footer-links-header'><p className='footer-link-header'>Examples</p></div>
                            <p className='footer-link'>Resume</p>
                            <p className='footer-link'>Cover Letter</p>
                            <p className='footer-link'>Resignation</p>
                            {/* <Link href='/'><div className='footer-link'>FAQs</div></Link> */}
                          </div>
                          <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Resources</p>
                            <Link href='/pricing'><div className='footer-link'>Pricing</div></Link>
                            <Link href='/blogs'><div className='footer-link'>Blog</div></Link>
                            <Link href='/guides'><div className='footer-link'>User Guides</div></Link>

                            {/* <p className='footer-link'><GoMail className='footer-contact-icon' /> info@resumebuilderai.com</p> */}
                            {/* <p className='footer-link'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
                          </div>
                          <div className='footer-links contact-links'>
                            <p className='footer-links-header'>Company</p>
                            <Link href='/about'><div className='footer-link'>About</div></Link>
                            <Link href='/contact'><div className='footer-link'>Contact</div></Link>
                            <Link href='/reviews'><div className='footer-link'>User Reviews</div></Link>
                            <Link href='/reviews'><p className='footer-link'>Affiliate <span className='new-tag'>New</span></p></Link>

                            {/* <p className='footer-link'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
                          </div>
                </div>
              </div>   
              <div className='copyright-footer'>
                  <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} ResumeBuilderAI - All Rights Reserved.</p>
                  <div className='copyright-footer-flexer'>
                  <Link target='_blank' rel='noreferrer' href='https://www.privacypolicygenerator.info/live.php?token=X9rYsibwbs1UKYQ41C7KL0IBJSIEOkts'><div className='footer-link tou-link'>Privacy Policy</div></Link>
                  <Link target='_blank' rel='noreferrer' href="https://www.termsofusegenerator.net/live.php?token=WtIAwIaSx5ilU5RgC3s2N2AtWAptbnTh"><div className='footer-link tou-link'>Terms of Use</div></Link>
                    </div>
              </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer