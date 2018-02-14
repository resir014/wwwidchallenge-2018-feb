'use strict'

const axios = require('axios')
const crypto = require('crypto')
const striptags = require('striptags')

const API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'

/**
 * generates an id from the post guid link.
 *
 * @param {string} guid the post guid
 */
const generateId = guid => guid.replace(/^https?:\/\//, '').split('/')[2]

/**
 * creates a basic description
 *
 * @param {string} desc the raw HTML description
 */
const getSubtitle = desc => desc.split('</p>')[0].replace(/\\n/, '')

module.exports = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  try {
    const response = await axios.get(API_URL)
    const { data } = response

    if (data.status === 'ok') {
      data.items.map((item) => {
        const nodeItem = {
          ...item,
          subtitle: striptags(getSubtitle(item.description))
        }

        const digest = crypto.createHash('md5')
          .update(JSON.stringify(nodeItem))
          .digest('hex')

        const node = {
          id: generateId(item.guid),
          parent: '__SOURCE__',
          children: [],
          internal: {
            type: 'MediumPost',
            contentDigest: digest
          },
          ...nodeItem,
        }

        createNode(node)
      })
    } else {
      throw new Error('Something went wrong loading the resource.')
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
