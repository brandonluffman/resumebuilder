import image1 from '../public/ai-resume-scan.png';
import image2 from '../public/ai-resume-scan.png';
import image3 from '../public/bot-resume.png';
import image4 from '../public/resume-graphic.jpeg';

export const images = ['/resume-graphic.jpeg', '/bot-resume.png', 'ai-resume-scan.png', '/bullseye.png']

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex


