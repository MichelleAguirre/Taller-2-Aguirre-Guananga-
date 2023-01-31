import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Aviones } from './aviones.model';


@Entity('aereopuertoAviones',{schema:'aereopuertoAviones'})
export class Aereopuerto{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('nombreAvion')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date;
    
    @OneToMany(() => Aviones, (airport) => airport.Aereopuerto)
    @JoinColumn({name:'aviones_id'})
    airport: Aviones;
    
    @Column('varchar',{
        name:'aereopuerto',
        comment: 'Nombre del aereopurto',
    })
    aereopuerto:string;

    @Column('varchar',{
        name:'linea',
        comment:'linea del avion ',
    })
    linea:string;
 
    
    @Column('varchar',{
        name:'numero_aereopuerto',
        comment:'Numero de pasajeros '
    })
    
    numberOfVuelo:string;
    static collage: any;

}
