const middleware = {}

middleware['setlocale'] = require('..\\middleware\\setlocale.ts')
middleware['setlocale'] = middleware['setlocale'].default || middleware['setlocale']

export default middleware
