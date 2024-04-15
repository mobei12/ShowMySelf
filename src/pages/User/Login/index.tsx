import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import loadsh from 'lodash';
import { login } from 'src/hooks';
import { EMessageType, showMessage } from 'src/utils';

const Login: FC = () => {
	const navigate = useNavigate();
	const [loadings, setLoadings] = useState<boolean>(false);

	const onFinish = (async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const values = {
			username: formData.get('username') as string,
			password: formData.get('password') as string
		};
		setLoadings(true);
		try {
			const { code, message, token } = await login(values);
			if (code === 200) {
				if (token) {
					localStorage.setItem('user_token', token);
					localStorage.setItem('user', JSON.stringify({ name: values.username }));
					showMessage('登录成功', EMessageType.success, 2, () => {
						navigate('/home');
					});
				} else {
					showMessage(message!, EMessageType.warning);
				}
			} else {
				showMessage(message!, EMessageType.error);
			}
		} catch (error) {
			console.error('Login error:', error);
		} finally {
			setLoadings(false);
		}
	});

	return (
		<div className="form-container">
			<form onSubmit={onFinish}>
				<label className="block">
					<span className="block text-base font-medium mb-1">用户名</span>
					<input type="text" id="username" className='peer' name="username" placeholder="用户名" required />
					<p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
						请输入用户名
					</p>
				</label>
				<label className="block">
					<span className="block text-base font-medium mb-1">密码</span>
					<input type="password" id="password" className='peer' name="password" placeholder="密码" required />
					<p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
						请输入用密码
					</p>
				</label>
				<div className='text-center'>
					<button className='px-4 py-1 font-semibold cursor-pointer  bg-cyan-500 text-white rounded-md mt-4 shadow-sm' type="submit" disabled={loadings}>登录</button>
				</div>
				<div style={{ textAlign: 'right' }}>
					<Link to="/user/register">注册</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
