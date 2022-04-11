import GradientText from 'components/atoms/GradientText';

const Footer = () => {
    return (<div className={`h-14 flex flex-col md:flex-row items-center justify-between border-t border-color-13 px-3`}>
        <div className='flex flex-col md:flex-row items-center'>
            <span>Copyright © 2022</span><GradientText className='mx-1' text='100xAltbase' /><span> All rights reserved.</span>
        </div>
        <div className='flex flex-col md:flex-row items-center'>
            <span>Designed by</span><GradientText className='ml-1' text='Yoshiro' />
        </div>
    </div>)
}

export default Footer;