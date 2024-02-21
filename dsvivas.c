#include<stdio.h>
#include<stdlib.h>
struct node{
    int data;
    struct node *next;

};
struct node *front;
struct node *rear;
void enque();
void deque();
void display();
void main(){
      int choice;
      while(choice!=4){
        printf("\n1.insert element\n2.Delete any element\n3.Display\n4.Exit\n");
        printf("enter choice");

        scanf("%d", &choice);

        switch (choice){
            case 1: enque();
            break;
            case 2: deque();
            break;
            case 3: display();
            break;
            case 4: exit(0);
            break;
            default: printf("enter correct choice");

        }
      }

}
void enque(){
    int val;
    struct node *ptr;
    ptr= (struct node *)malloc(sizeof(struct node));
    if(ptr==NULL){
        printf("overflow");

    }
    else{
        printf("enter value");
        scanf("%d", &val);
        ptr->data=val;
        if(front==NULL){
            front=ptr;
            rear=ptr;
            front->next=NULL;
            rear->next=NULL;

        }
        else{
            rear->next=ptr;
            rear=ptr;
            rear->next=NULL;

        }
    }
}
void deque(){
    struct node *ptr;
    if(front==NULL){
        printf("underflow");

    }
    else{
        ptr=front;
        front=front->next;
        free(ptr);

    }
}
void display(){
    struct node *ptr;
    ptr=front;
    if(front==NULL){
        printf("queue is empty");

    }
    else{
        while(ptr!=NULL){
            printf("%d", ptr->data);
            ptr=ptr->next;

        }
    }
}
