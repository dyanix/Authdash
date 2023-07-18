import Head from "next/head"
import Link from "next/link"
import { signIn } from "next-auth/react"
import Layout from "../layout/Layout";
import { useFormik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { login_validate } from "../lib/validate";
import { useRouter } from "next/router";


export default function Login() {
const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit
    })

    async function onSubmit(values) {
       const status = await signIn('credentials',{
        redirect:false,
        email:values.email,
        password:values.password,
        callbackUrl:"http://localhost:3000"
       })
     if(status.ok)router.push(status.url)
    }
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Login</title>
                </Head>
                <section className="w-3/4 mx-auto flex flex-col gap-5 text-gray-800">
                    <div >
                        <h1 className="text-gray-800 text-4xl font-bold py-4  ">Sign In</h1>
                        <p className="w-3/4 mx-auto text-gray-800 ">Sign in to your account</p>
                    </div>
                    <div className="input-button flex gap-5 items-center justify-center ">
                        <button onClick={handleGoogleSignin}
                            type="submit"
                            className="bg-white text-black rounded-lg px-4 py-2 flex items-center justify-center "
                            style={{
                                width: '180px',
                                height: '30px',
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '15px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color: '#858585',
                            }}
                        >
                            <span className="mr-2">
                                <FcGoogle style={{ width: '14px', height: '14px' }} />
                            </span>
                            Sign in with Google
                        </button>

                        <button
                            type="submit"
                            className="bg-white text-black rounded-lg px-4 py-2 flex items-center justify-center"
                            style={{
                                width: '180px',
                                height: '30px',
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '15px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color: '#858585',
                            }}
                        >
                            <span className="mr-2">
                                <AiFillApple style={{ width: '14px', height: '14px' }} />
                            </span>
                            Sign in with Apple
                        </button>
                    </div>

                    <div
                        className="container bg-white   border-gray-300 p-6 "
                        style={{
                            width: '385px',
                            height: '370px',
                            top: '409px',
                            left: '832px',
                            alignSelf: 'center',
                            borderRadius: '1.5rem'

                        }}
                    >
                        <form className="flex flex-col gap-5 " onSubmit={formik.handleSubmit}>
                        <div className="input-group mb-1 text-left">
                                <label htmlFor="email" >
                                    Email Address
                                </label>
                                <input
                                    // onChange={formik.handleChange}
                                    // value={formik.values.email}
                                    {...formik.getFieldProps('email')}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 mt-2"
                                    style={{ width: '325px', height: '40px' }}
                                />
                                {formik.errors.email && formik.touched.email ? <span className="text-rose-400">{formik.errors.email}</span> : <></>}
                            </div>
                            <div className="input-group mb-1 text-left">
                                <label htmlFor="password"  >
                                    Password
                                </label>
                                <input
                                    //  onChange={formik.handleChange}
                                    //  value={formik.values.password}
                                    {...formik.getFieldProps('password')}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 mt-2"
                                    style={{ width: '325px', height: '40px' }}
                                />
                                {formik.errors.password && formik.touched.password ? <span className="text-rose-400">{formik.errors.password}</span> : <></>}

                            </div>
                            <p className="text-left text-gray-400 ">
                                <Link href={'/register'} className="text-blue-500">Forgot password?</Link>
                            </p>

                            <div className="input-button " >
                                <button type="submit" className="bg-black text-white rounded-lg px-4 py-2 " style={{ width: '325px', height: '40px' }}>Sign in</button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-gray-400">
                        Don't have an account? <Link href={'/register'} className="text-blue-500">Register here</Link>
                    </p>
                </section>
            </Layout>
        </>
    )

}