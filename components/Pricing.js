import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/auth';
import Link from 'next/link';

const Pricing = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data) {
                setUser(data);
                console.log(data);
            } else {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    const [active, setActive] = useState('monthly');

    // Function to handle button clicks
    const handleToggle = (plan) => {
      setActive(plan);
    };

    return (
      <div className='pricing-container'>
        <h2 className='pricing-header'>All plans include a 30-day money back guarantee</h2>
        <h6 className='pricing-subheader'>Pays for itself with the time you&apos;ll save creating one resume</h6>
        <div className='pricing-grid-toggle-container'>
            <button
                className={`pricing-grid-toggle-btn ${active === 'monthly' ? 'toggle-active' : ''}`}
                onClick={() => handleToggle('monthly')}
            >
                Monthly
            </button>
            <button
                className={`pricing-grid-toggle-btn ${active === 'yearly' ? 'toggle-active' : ''}`}
                onClick={() => handleToggle('yearly')}
            >
                Yearly
            </button>
            </div>

            <div className='div-content'>
                {active === 'monthly' ? (
                <div className='pricing-grid'>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>No Card Required</h3>
                        <p className='pricing-grid-p'>Get a feel for how it works. No payment required.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan blue-pricing-header'>Free</h2>
                        {user?.user ? ( <Link href='/test'><button className='pricing-grid-btn btn-tertiary' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$9 / Monthly</h3>
                        <p className='pricing-grid-p'>Access to all features with 100 AI Credits & free monthly review.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan'>Pro</h2>
                        {user?.user ? ( <Link href='https://buy.stripe.com/test_5kAfZWfRO11B8c89AA'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$29 / Monthly</h3>
                        <p className='pricing-grid-p'>Access to all features with <i>unlimited</i> AI Credits.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan platinum-header'>Enterprise</h2>
                        {user?.user ? ( <Link href='/payment'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
            </div>
        ) : (
            <div className='pricing-grid'>
            <div className='pricing-grid-item'>
                <h3 className='pricing-grid-header'>No Card Required</h3>
                <p className='pricing-grid-p'>Get a feel for how it works. No payment required.</p>
                <hr className='pricing-grid-hr'></hr>
                <h2 className='pricing-grid-plan blue-pricing-header'>Free</h2>
                {user?.user ? ( <Link href='/test'><button className='pricing-grid-btn btn-tertiary' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
            </div>
            <div className='pricing-grid-item'>
                <h3 className='pricing-grid-header'>$79 / Annually</h3>
                <p className='pricing-grid-p'>Access to all features with 100 AI Credits & free monthly review.</p>
                <hr className='pricing-grid-hr'></hr>
                <h2 className='pricing-grid-plan'>Pro</h2>
                {user?.user ? ( <Link href='https://buy.stripe.com/test_5kAfZWfRO11B8c89AA'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>)}
            </div>
            <div className='pricing-grid-item'>
                <h3 className='pricing-grid-header'>$300 / Annually</h3>
                <p className='pricing-grid-p'>Access to all features with <i>unlimited</i> AI Credits.</p>
                <hr className='pricing-grid-hr'></hr>
                <h2 className='pricing-grid-plan platinum-header'>Enterprise</h2>
                {user?.user ? ( <Link href='/payment'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
            </div>
        </div>
        )
        }
      </div>     
    </div>
    );
};

export default Pricing;
