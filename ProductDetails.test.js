

describe('Show product detail'){
  it('check if title is visible'){
    const data =  screen.getByTagName('h2');
    expect(data).toBe('Product Detail:')
  }
  it('check if list is empty'){
    const data =  screen.getByTagName('div');
    expect(data).toBe('iPhone9')
  }
}