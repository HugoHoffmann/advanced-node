import { FacebookAccount } from '@/domain/models'

describe('FacebookAccount', () => {
  const fbData = {
    name: 'fb_name',
    email: 'fb_email',
    facebookId: 'teste'
  }
  it('should create with facebook data only', () => {
    const sut = new FacebookAccount(fbData)

    expect(sut).toEqual({
      name: 'fb_name',
      email: 'fb_email',
      facebookId: 'teste'
    })
  })
  it('should update if name is empty', () => {
    const accountData = { id: 'any_id' }
    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({
      id: 'any_id',
      name: 'fb_name',
      email: 'fb_email',
      facebookId: 'teste'
    })
  })
  it('should not update name if its not empty', () => {
    const accountData = { id: 'any_id', name: 'any_name' }
    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({
      id: 'any_id',
      name: 'any_name',
      email: 'fb_email',
      facebookId: 'teste'
    })
  })
})
