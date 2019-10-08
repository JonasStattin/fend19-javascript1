function findTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.nodeValue.trim() !== '') {
      return node.nodeValue.trim()
    }
  }
  if (node.children.length === 0) {
    return node.childNodes[0].nodeValue.trim()
  }
  return findTextNode(node.children[0])
}

function findItemText(list, pos) {
  if (list.tagName !== 'UL' && list.tagName !== 'OL') { 
    return false
  }
  if (pos >= list.children.length || pos < 0) {
    return false
  }
  return findTextNode(list.children[pos])
}

const msgList = document.getElementById('msgList')
console.log(findItemText(msgList, 0))