import { Formik } from "formik";



<Formik initialValues={signupform} onVideo={videoModel}>
{({
    values, handleSubmit, handleChange
}) => (
    <form className="mt-4" onSubmit={handleSubmit}>
        <label className="mt-3">Name</label>
        <input className="form-control" id="name" onChange={handleChange} value={values.name} />

        <label className="mt-3">Username</label>
        <input className="form-control" id="username" onChange={handleChange} value={values.username} />

        <label className="mt-3">Email</label>
        <input className="form-control" id="email" onChange={handleChange} value={values.email} />

        <label className="mt-3">Password</label>
        <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />

        <button type="submit" className="btn btn-secondary mt-5 w-100">Submit</button>
    </form>
)}
</Formik>