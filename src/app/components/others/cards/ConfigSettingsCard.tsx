import React from 'react'
import './styles/ConfigSettingsCard.css';
export default function ConfigSettingsCard(props: { data: { title: string, icon: string, dropDownIcon: string | null, link: string | null } }) {
    const { title, icon, dropDownIcon, link } = props.data;
    return (
        <div className='ConfigSettingsCard_main'>
            <section className='ConfigSettingsCard_left'>
                <img src={icon} alt='icon' className='ConfigSettingsCard_icon_img' />
                <h4 className='ConfigSettingsCard_title'>
                    {title}
                </h4>
            </section>
            <section className='ConfigSettingsCard_right'>
                {
                    !link ? (<h3 style={{ rotate: `${!dropDownIcon ? '90deg' : ''}` }}>
                        {dropDownIcon ? (
                            <img src={dropDownIcon} alt="" />
                        ) : '>'}
                    </h3>) : (
                        <a href={link} target='_blank'>
                            <h3 style={{ rotate: `${!dropDownIcon ? '90deg' : ''}` }}>
                                {dropDownIcon ? (
                                    <img src={dropDownIcon} alt="" />
                                ) : '>'}
                            </h3>
                        </a>
                    )
                }
            </section>
        </div >
    )
}
