class DoublyLinkedList {
  Node head, tail;
  int size;

  public void addFirst(int data) {
    Node node = new Node(data);
    if(size == 0) {
      head = node;
      tail = node;
    } else {
      node.next = head;
      head.prev = node;
      head = node;
    }
    size++;
  }

  public Node removeFirst() {
    if(size == 0) {
      return null;
    }
    Node temp = head;
    if(size == 1) {
      head = null;
      tail = null;
      size = 0;
    } else {
      head = head.next;
      head.prev = null;
      temp.next = null;
      size--;
    }
    return temp;
  }

  public void addLast(int data) {
    Node node = new Node(data);
    if(size == 0) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    size++;
  }

  public Node removeLast() {
    if(size <= 1) {
      return removeFirst();
    } else {
      Node temp = tail;
      tail = tail.prev;
      tail.next = null;
      temp.prev = null;
      size--;
      return temp;
    }
  }

  public void add(int index, int data) {
    if(index < 0 || index > size) {
      throw new IndexOutOfBoundsException();
    }
    if(index == 0) {
      addFirst(data);
      return;
    }
    if (index == size) {
        addLast(data);
        return;
    }
    Node node = new Node(data);
    int count = 0;
    Node curr = head;
    while(count < index-1) {
      curr = curr.next;
      count++;
    }
    Node temp = curr.next;
    curr.next = node;
    node.prev = curr;
    node.next = temp;
    temp.prev = node;
    size++;
  }

  public Node remove(int index) {
    if (index < 0 || index >= size) {
        throw new IndexOutOfBoundsException();
    }

    if (index == 0) {
        return removeFirst();
    }

    if (index == size - 1) {
        return removeLast();
    }

    int count = 0;
    Node curr = head;
    while (count < index - 1) {
        curr = curr.next;
        count++;
    }

    Node temp = curr.next;
    curr.next = temp.next;
    temp.next.prev = curr;
    temp.next = null;
    temp.prev = null;
    size--;

    return temp;
  }

  public void print() {
    if(size == 0) {
      System.out.print("null");
      return;
    }

    Node curr = this.head;
    System.out.print("null<->");
    while(curr != null) {
      System.out.print(curr.data);
      System.out.print("<->");
      curr = curr.next;
    }
    System.out.print("null");
  }
}

class Node {
  int data;
  Node next;
  Node prev;

  Node(int data) {
    this.data = data;
  }
}

class Main {
  public static void main(String[] args) {
    DoublyLinkedList list = new DoublyLinkedList();
    list.addLast(5);
    list.addLast(6);
    list.addLast(7);
    list.print();
  }
}