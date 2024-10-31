// import logo from '../../../assets/logo.png'
import { useTranslation } from 'react-i18next';
import logo_inverted from '../../../assets/logo_inverted.png'
import LanguageChanger from '../../general/language/LanguageChanger';

export default function Login() {
    const { t } = useTranslation();

    return (
        <div className='d-flex flex-row vh-100'>
            <div className='d-flex flex-column d-none d-md-block col-6 bg-primary text-white p-5'>
                <div className='m-auto d-flex flex-column h-100'>
                    <div className='d-flex flex-row h-25 justify-content-between'>
                        <span className=' fw-semibold fs-5'>
                            {t('React.LoginTopText')}
                        </span>
                        <LanguageChanger />
                    </div>
                    <div className='d-flex flex-row h-50 m-auto'>
                        <div className='d-flex'>
                            <img className='d-flex m-auto w-50' src={logo_inverted} alt='logo' />
                        </div>
                    </div>
                    <div className='d-flex flex-row h-25'>
                        <span className='mt-auto fs-5'>
                            {t('React.LoginBottomText')}
                        </span>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column col-12 col-md-6 p-md-5'>
                <LanguageChanger className='p-5 pb-0 d-block d-md-none' />
                <div className='m-auto d-flex flex-column w-100 w-md-75'>
                    <div className='m-auto d-flex flex-row'>
                        <span className='fs-1 fw-semibold'>
                            {t('React.LoginTitle')}
                        </span>
                    </div>
                    <div className='m-auto d-flex flex-row'>
                        <span className='fs-5'>
                            {t('React.LoginSubtitle')}
                        </span>
                    </div>
                    <form className='d-flex flex-column my-3 w-75 m-auto'>
                        <div className='d-flex flex-column'>
                            <input type='text' className='form-control my-2 py-3' placeholder={t('React.LoginEmail')} />
                            <input type='password' className='form-control my-2 py-3' placeholder={t('React.LoginPassword')} />
                        </div>
                        <button className='btn btn-primary-custom my-2 py-3'>{t('React.LoginButton')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
