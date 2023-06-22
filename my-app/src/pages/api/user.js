import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
	if (req.method === 'POST') {
		if (!req.headers.cookie) {
			return res.status(403).json({ message: 'Not Authorized' })
		}

		try {
			const { refresh } = cookie.parse(req.headers.cookie)

			const config = {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}

			const body = {
				refresh
			}

			const { data } = await axios.post('https://the-booktown-9hrj-awt7vh6qe-kshitijthareja.vercel.app/api/token/refresh/', body, config)

			if (data && data.access) {
				const userConfig = {
					headers: {
						'Authorization': 'Bearer ' + data.access
					}
				}

				const { data:userData } = await axios.get('https://the-booktown-9hrj-awt7vh6qe-kshitijthareja.vercel.app/api/user/', userConfig)

				res.status(200).json({ user: userData, access:data.access })
			} else {
				res.status(500).json({ message: 'Something went wrong' })
			}
		} catch(error) {
			if (error.response) {
		        return res.status(401).json({message: error.response.data.detail})
		    } else if (error.request) {
		        console.error(error.request);
		    } else {
		        console.error('Error', error.message);
		    }
		    return res.status(500).json({message: 'Something went wrong'})
		}

	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).json({message: `Method ${req.method} is not allowed`})
	}
}