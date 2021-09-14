import User, {IUser} from '../Models/User'


export async function createUserDb ({name,last_name,email,password}: IUser): Promise<IUser>{
    if (!name || !last_name || !email || !password) throw new Error('All fields are required')

    const isUser = await User.findOne({
      email
    })
    if (isUser) {
      throw new Error('User already exists')
    }

    const newUser = new User({
      name,
      last_name,
      email,
      password
    })
    await newUser.save()
    
    return newUser
  
}