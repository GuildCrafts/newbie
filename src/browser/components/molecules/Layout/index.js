export default class Layout extends Component {
  render() {
    return <div>
      <div>This should be the navbar</div>
      <div className='layout-content'>
        {children}
      </div>
    </div>
  }
}
