import React from 'react'
import { useTranslation } from 'react-i18next';

type LanguageChangerProps = {
    className?: string;
}

const LanguageChanger: React.FC<LanguageChangerProps> = ({ className }) => {
    const flagRatio = 30;
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language); // Change language here
    };
    return (
        <div className={`flex-row fw-semibold fs-5 ${className}`}>
            <img className='rounded mx-1 cursor-pointer'
                src="https://flagcdn.com/h120/ro.png"
                width={flagRatio}
                height={flagRatio}
                alt="Romanian"
                onClick={() => changeLanguage('ro')}
            />
            <img className='rounded mx-1 cursor-pointer'
                src="https://flagcdn.com/h120/gb.png"
                width={flagRatio}
                height={flagRatio}
                alt="English"
                onClick={() => changeLanguage('en')}
            />
        </div>
    )
}
export default LanguageChanger
