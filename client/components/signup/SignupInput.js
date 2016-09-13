import React from 'react';

const SignupInput =(props) => {
	return (
		<div>
			<form onSubmit={props.onSubmit}>
				<h1 className="login-signup-words"> Signup </h1>
				  <div className="form-group">
					<label className="control-label"> Username</label>
					<input
						onChange={props.onChange}
						type="text"
						name="userName"
						className="form-control"
					/>
					</div>

          <div className="form-group">
					<label className="control-label"> E-mail</label>
					<input
						onChange={props.onChange}
						type="text"
						name="email"
						className="form-control"
					/>
					</div>

				  <div className="form-group">
					<label className="control-label">Password</label>
					<input
						onChange={props.onChange}
						type="password"
						name="password"
						className="form-control"
					/>
					</div>

					<div className="form-group">
						<button className="submit-button btn btn-default btn-lg">Sign Up
						</button>
					</div>
			</form>
		</div>
		)
	}

export default SignupInput;

