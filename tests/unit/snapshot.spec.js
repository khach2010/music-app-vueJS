import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import SongItem from '@/components/SongItem'

describe('Snapshot SongItem.vue', () => {
  test('render correctly', () => {
    const song = {
      docID: 'abcd',
      modified_name: 'test',
      display_name: 'test',
      commemt_count: 5,
    }

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
