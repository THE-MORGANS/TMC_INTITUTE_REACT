import Checkbox from '@/components/Checkbox';
import { BannerSection } from '@/components/home/BannerSection';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { NavBar } from '@/Layouts/Navbar';
import RegisterImage from '@/assets/images/register_image.png';
import logo from '@/assets/images/logo.jpg';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';
import OnlineCoursesSection from '@/components/contact/OnlineCoursesSection';
 
export default function Register({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        fullname:'',
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const [scrolled, setScrolled] = useState(false);
    const [showPassword, setShowPasswordState] = useState(false);
    
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function setShowPassword(value: boolean): void {
        setShowPasswordState(value);
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="min-h-screen bg-gray-5  0">
                <NavBar scrolled={scrolled} />
                
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">
                        {/* Left Side - Image */}
                        <div className="lg:w-1/2 relative">
                            <div 
                                className="h-64 lg:h-full w-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${RegisterImage})`,
                                }}
                            >
                                {/* Overlay for better text contrast */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
                                
                                {/* Optional: Text overlay on image */}
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back!</h2>
                                    <p className="text-white/90">Login to access your account and continue your journey with us.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
                            {/* Header */}
                            <div className="mb-4 text-center lg:text-left">
                                <img src={logo} alt="Login" className="w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-full object-cover" />
                                <h2 
                                    className="font-['Inter'] font-extrabold text-[36.42px] leading-[36.17px] tracking-[0%] text-gray-800 mb-2"
                                >
                                    Sign Up
                                </h2>
                                <p 
                                    className="font-['Inter'] font-normal text-[19.6px] leading-none tracking-normal text-left text-[#363636]"
                                >
                                    Welcome to TMC Institue
                                </p>

                                {/* Sign in with Google Button */}
                                <button 
                                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200 shadow-sm hover:shadow-md mt-6"
                                    onClick={() => {
                                        // Handle Google Sign In
                                        console.log('Sign up via Google');
                                        // window.location.href = '/auth/google';
                                    }}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    <span>Sign up via Google</span>
                                </button>
                                
                                {/* Divider */}
                                <div className="flex items-center my-4">
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <span className="px-4 text-sm text-gray-500">or</span>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                            </div>

                            {status && (
                                <div className="mb-4 text-sm font-medium text-green-600">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-6">
                                {/* Full name */}
                                 <div>
                                    <InputLabel htmlFor="fullname" value="Full Name" />
                                    <div className="relative mt-1">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder='Full name'
                                            value={data.fullname}
                                            className="mt-1 block w-full pr-10"
                                            autoComplete="name"
                                            onChange={(e) => setData('fullname', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="fullname" value="Email address" />
                                    <div className="relative mt-1">
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder='Email address'
                                            value={data.email}
                                            className="mt-1 block w-full pr-10"
                                            autoComplete="name"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />
                                        {/* Message Icon at the end */}
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                {/* Password  */}

                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <div className="relative mt-1">
                                        <TextInput
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder='Password'
                                            value={data.password}
                                            className="mt-1 block w-full pr-10"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        <button 
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer hover:text-[#c0392b] transition-colors"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5 text-gray-400 hover:text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-gray-400 hover:text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="password" value="Confirm Password" />
                                    <div className="relative mt-1">
                                        <TextInput
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder='Password'
                                            value={data.password}
                                            className="mt-1 block w-full pr-10"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        <button 
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer hover:text-[#c0392b] transition-colors"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5 text-gray-400 hover:text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-gray-400 hover:text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                {/* Submit Button */}
                                <PrimaryButton
                                    className="w-full justify-center bg-[#c0392b] hover:bg-[#a83224] py-3"
                                    disabled={processing}
                                >
                                    Sign Up
                                </PrimaryButton>
                                

                            </form>
                                {/* Remember me (optional) */}
                                <div className="flex items-center ">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            I agree to the 
                                        </span>
                                    </label>
                                    
                                    {/* Forgot Password Link */}
                                    <Link 
                                        href=""
                                        className="font-['Inter'] font-normal text-[14px] leading-[32.56px] tracking-[0%] text-[#c0392b] hover:text-white hover:bg-[#BE383F] hover:underline transition duration-200 px-3 py-1 rounded"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </div>
                                <div className="text-left mt-6">
                                    <p className="font-['Inter'] font-normal text-[16px] leading-[100%] tracking-[0%] text-gray-600">
                                        Already have an account?{' '}
                                        <Link 
                                            href={route('login')} 
                                            className="font-['Inter'] font-extrabold text-[16px] leading-[100%] tracking-[0%] text-[#c0392b] hover:underline transition duration-200"
                                        >
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
                <OnlineCoursesSection/>

            </div>
        </GuestLayout>
    );
}