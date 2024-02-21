#include<Stdio.h>
void selectionSort(int a[], int n){
    int i,j,min,temp;
    for(i=0;i<n-1;i++){
        min=i;
        for(j=i+1; j<n;j++){
            if(a[j]<a[min]){
                min=j;
            }
        }
        temp=a[min];
        a[min]=a[i];
        a[i]=temp;
    }
}
void print(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d\n", arr[i]);
    }

}

int main() {
    int a[100], n, i;
    printf("Enter number of elements");
    scanf("%d", &n);
    printf("enter elements");

    for (i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    printf("Unsorted array: ");
    print(a, n);

    selectionSort(a, n);

    printf("array after sorting:");
    print(a, n);

    return 0;
}