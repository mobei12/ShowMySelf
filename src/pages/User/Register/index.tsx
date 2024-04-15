import React, { FC, ReactElement, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EMessageType, showMessage } from 'src/utils';
import { register } from 'src/hooks';
// import loadsh from 'lodash';

const Register: FC = (): ReactElement => {
	const navigate = useNavigate();
	const [loadings, setLoadings] = useState<boolean>(false);

	const getRegister = (async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const values = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
			confirmPassword: formData.get('confirmPassword') as string,
		};
		setLoadings(true);
		try {
			const { code, message, id } = await register(values);
			if (code === 200) {
				if (id) {
					showMessage('注册成功', EMessageType.success);
					navigate('/user/login');
				} else {
					showMessage(message!, EMessageType.warning);
					setLoadings(false);
				}
			} else {
				showMessage(message!, EMessageType.error);
				setLoadings(false);
			}
		} catch (error) {
			console.error('Login error:', error);
		} finally {
			setLoadings(false);
		}
	});

	// const onFinish = loadsh.debounce(getRegister, 1000);

	return (
		<div style={{ maxWidth: 600, minHeight: '300px' }}>
			<form
				className=""
				onSubmit={getRegister}
			>
				<label className="block">
					<span className="block text-base font-medium mb-1">用户名</span>
					<input type="text" id="username" className='peer' name="username" placeholder="用户名" required />
					<p className="mt-2 invisible peer-invalid:visible text-orange-600 text-sm">
						请输入用户名
					</p>
				</label>
				<label className="block">
					<span className="block text-base font-medium mb-1">密码</span>
					<input type="password" id="password" className='peer' name="password" placeholder="密码" required />
					<p className="mt-2 invisible peer-invalid:visible text-orange-600 text-sm">
						请输入密码
					</p>
				</label>
				<label className="block">
					<span className="block text-base font-medium mb-1">确认密码</span>
					<input type="password" className='peer' id="confirmPassword" name="confirmPassword" placeholder="密码" required />
					<p className="mt-2 invisible peer-invalid:visible text-orange-600 text-sm">
						请确认密码
					</p>
				</label>
				<div className='text-center'>
					<button className='px-4 py-1 font-semibold cursor-pointer  bg-cyan-500 text-white rounded-md mt-4 shadow-sm' type="submit" disabled={loadings}>注册</button>
				</div>
				<div style={{ textAlign: 'right' }}>
					<Link className="dark:text-white" to="/user/login">
						登录
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
