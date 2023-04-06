import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import rootRouter from './pages';

function App() {
	return (
		<div className="App">
			{
				<Suspense fallback={<div>Loading...</div>}>
					<RouterProvider router={rootRouter()} />
				</Suspense>
			}
		</div>
	);
}

export default App;
