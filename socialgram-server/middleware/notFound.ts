const notFound = (req: Request, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any } } }) => res.status(404).send('Route does not exist')

module.exports = notFound