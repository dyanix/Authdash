import Head from "next/head"
import Layout from "../layout/Layout"
import Link from "next/link"
import { useFormik } from 'formik';
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }
        await fetch('http://localhost:3000/api/auth/register',options).then(res=> res.json()).then((data)=>{
            if(data) router.push("http://localhost:3000")

        })
    }
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-5 text-gray-800">
                <div >
                    <h1 className="text-gray-800 text-4xl font-bold py-4 ">Register</h1>
                    <p className="w-3/4 mx-auto text-gray-800 ">Create an account</p>
                </div>


                <div
                    className="container bg-white    border-gray-300 p-6 "
                    style={{
                        width: '385px',
                        height: '360px',
                        top: '409px',
                        left: '832px',
                        alignSelf: 'center',
                        borderRadius: '1.5rem'

                    }}
                >
                    <form className="flex flex-col gap-3 " onSubmit={formik.handleSubmit}>
                        <div className="input-group mb-1 text-left">
                            <label htmlFor="email" >
                                Email Address
                            </label>
                            <input
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
                        <div className="input-group mb-1 text-left ">
                            <label htmlFor="password"  >
                                Password
                            </label>
                            <input
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



                        <div className="input-button" >
                            <button type="submit" className="bg-black text-white rounded-lg px-4 py-2 mt-5" style={{ width: '325px', height: '40px' }}>Register</button>
                        </div>

                    </form>
                </div>

                <p className="text-center text-gray-400">
                    Already have an account ? <Link href={'/'} className="text-blue-500"> Sign in.</Link>
                </p>
            </section>
        </Layout>

    )

}


